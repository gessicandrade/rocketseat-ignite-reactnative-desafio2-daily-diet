import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { get } from "./get";
import { get as getSection }  from "@storage/sections/get";
import { store as storeSection }  from "@storage/sections/store";
import { update as updateSection }  from "@storage/sections/update";
import { store as storeSeq }  from "@storage/seqs/store";
import { clear as clearSections } from "@storage/sections/clear";
import { MealStorageDTO } from "./MealStorageDTO";
import { SectionStorageDTO } from "@storage/sections/SectionStorageDTO";

export async function update(oldMeal:MealStorageDTO, upMeal:MealStorageDTO) {
  try {
    // ATUALIZA A REFEICAO
    const storedMeals:MealStorageDTO[] = await get();
    
    const upMeals = storedMeals.map(meal => {
      if (meal.name === oldMeal.name && meal.description === oldMeal.description && meal.date === oldMeal.date && meal.hour === oldMeal.hour && meal.isInside === oldMeal.isInside) {
        return upMeal;
      }
      return meal
    })
    
    const storage = JSON.stringify(upMeals)
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);


    // ATUALIZA A MELHOR SEQUENCIA
    let controller:number = 0;
    let best:number = 0;

    upMeals.map(async meal => {
        meal.isInside ? controller++ : controller = 0,
        meal.isInside && controller > best ? best++ : best
    })

    await storeSeq({controller: controller, best: best})

    
    // ATUALIZA A SECTION LIST
    const dates:string[] = [];
    
    upMeals.map(meal => {
      if (dates.length > 0) {
        const dateAlreadyExists = dates.includes(meal.date)
        
        if (!dateAlreadyExists) {
          dates.push(meal.date)
        }
      } else {
        dates.push(meal.date)
      }
    })

    await clearSections()
    
    dates.map(async date => {
      const storedSections:SectionStorageDTO[] = await getSection();
      const newSection:SectionStorageDTO = {
        title: date,
        data: upMeals.filter(meal => meal.date === date),
      }
      
      if (storedSections.length > 0) {
        const checkAlreadySection = storedSections.filter(section => section.title === date)
        checkAlreadySection.length > 0 ? await updateSection(storedSections, newSection, date) : await storeSection(newSection)
      } else {
        await storeSection(newSection)
      }
    })

  } catch (error) {
    throw error
  }
}