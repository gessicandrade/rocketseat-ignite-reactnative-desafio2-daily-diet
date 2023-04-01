import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION, SECTION_COLLECTION } from "@storage/storageConfig";
import { get } from "./get";
import { get as getSection }  from "@storage/sections/get";
import { store as storeSeq }  from "@storage/seqs/store";
import { MealStorageDTO } from "./MealStorageDTO";
import { SectionStorageDTO } from "@storage/sections/SectionStorageDTO";

export async function remove(deleteMeal:MealStorageDTO) {
  try {
    // REMOVE A REFEICAO
    const storedMeals:MealStorageDTO[] = await get();
    
    const upMeals = storedMeals.filter(meal => {
      return meal.name !== deleteMeal.name || meal.description !== deleteMeal.description || meal.date !== deleteMeal.date || meal.hour !== deleteMeal.hour || meal.isInside !== deleteMeal.isInside
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
    const storedSections:SectionStorageDTO[] = await getSection();
    const upSections = storedSections.filter(section => {
      const upData = section.data.filter(data => {
        return data.name !== deleteMeal.name || data.description !== deleteMeal.description || data.date !== deleteMeal.date || data.hour !== deleteMeal.hour || data.isInside !== deleteMeal.isInside
      })
      return upData.length > 0
    })

    await AsyncStorage.setItem(SECTION_COLLECTION, JSON.stringify(upSections));

    const storedSections2:SectionStorageDTO[] = await getSection();
    const upSections2 = storedSections2.map(section => {
      const upData = section.data.filter(data => {
        return data.name !== deleteMeal.name || data.description !== deleteMeal.description || data.date !== deleteMeal.date || data.hour !== deleteMeal.hour || data.isInside !== deleteMeal.isInside
      })
      return {...section, data: upData}
    })

    await AsyncStorage.setItem(SECTION_COLLECTION, JSON.stringify(upSections2));

  } catch (error) {
    throw error
  }
}