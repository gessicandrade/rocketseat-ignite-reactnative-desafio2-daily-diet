import AsyncStorage from "@react-native-async-storage/async-storage";
import { SECTION_COLLECTION } from "@storage/storageConfig";

export async function clear() {
  try {
    await AsyncStorage.removeItem(SECTION_COLLECTION);
  } catch (error) {
    throw error
  }
}