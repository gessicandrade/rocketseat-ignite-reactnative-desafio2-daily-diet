import AsyncStorage from "@react-native-async-storage/async-storage"
import { SECTION_COLLECTION } from "@storage/storageConfig"

export async function get() {
  try {
    const storage = await AsyncStorage.getItem(SECTION_COLLECTION)
    const sections: [] = storage ? JSON.parse(storage) : []
    return sections
  } catch (error) {
    throw error
  }
}