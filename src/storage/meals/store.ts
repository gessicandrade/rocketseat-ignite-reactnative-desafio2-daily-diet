import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { get } from "./get";
import { get as getSection }  from "@storage/sections/get";
import { store as storeSection }  from "@storage/sections/store";
import { update as updateSection }  from "@storage/sections/update";
import { get as getSeq }  from "@storage/seqs/get";
import { store as storeSeq }  from "@storage/seqs/store";
import { MealStorageDTO } from "./MealStorageDTO";
import { SectionStorageDTO } from "@storage/sections/SectionStorageDTO";
import { SeqStorageDTO } from "@storage/seqs/SeqStorageDTO";

export async function store(newMeal:MealStorageDTO) {
  try {
    const storedMeals = await get();
    const storage = storedMeals.length > 0 ? JSON.stringify([...storedMeals, newMeal]) : JSON.stringify([newMeal])
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    
    const seqs:SeqStorageDTO[] = await getSeq()

    if (seqs.length > 0) {
      let controller:number = seqs[0].controller;
      let best:number = seqs[0].best;
      
      newMeal.isInside ? controller++ : controller = 0,
      newMeal.isInside && controller > best ? best++ : best
      
      await storeSeq({controller: controller, best: best})
    } else {
      let newSeq:SeqStorageDTO = {
        controller: newMeal.isInside? 1 : 0,
        best: newMeal.isInside? 1 : 0
      }
      await storeSeq(newSeq)
    }

    const storedUpdatedMeals:MealStorageDTO[] = await get();
    
    const dates:string[] = [];
    
    storedUpdatedMeals.map(meal => {
      if (dates.length > 0) {
        const dateAlreadyExists = dates.includes(meal.date)
        
        if (!dateAlreadyExists) {
          dates.push(meal.date)
        }
      } else {
        dates.push(meal.date)
      }
    })

    dates.map(async date => {
      const storedSections:SectionStorageDTO[] = await getSection();
      const newSection:SectionStorageDTO = {
        title: date,
        data: storedUpdatedMeals.filter(meal => meal.date === date),
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