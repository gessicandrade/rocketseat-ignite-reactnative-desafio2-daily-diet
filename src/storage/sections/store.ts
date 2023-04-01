import AsyncStorage from "@react-native-async-storage/async-storage";
import { SECTION_COLLECTION } from "@storage/storageConfig";
import { get } from "./get";
import { SectionStorageDTO } from "./SectionStorageDTO";

export async function store(newSection:SectionStorageDTO) {
  try {
    const storedSections = await get();
    const storage = storedSections.length > 0 ? JSON.stringify([...storedSections, newSection]) : JSON.stringify([newSection])
    
    await AsyncStorage.setItem(SECTION_COLLECTION, storage);
  } catch (error) {
    throw error
  }
}