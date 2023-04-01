import AsyncStorage from "@react-native-async-storage/async-storage";
import { SECTION_COLLECTION } from "@storage/storageConfig";
import { SectionStorageDTO } from "./SectionStorageDTO";

export async function update(storedSections:SectionStorageDTO[], newSection:SectionStorageDTO, date:string) {
  try {
    const sectionMapping = storedSections.map(section => {
      if (section.title === date) {
        return {...section, data: newSection.data}
      }
      return section
    })

    const storage = JSON.stringify(sectionMapping)
    await AsyncStorage.setItem(SECTION_COLLECTION, storage);
  } catch (error) {
    throw error
  }
}