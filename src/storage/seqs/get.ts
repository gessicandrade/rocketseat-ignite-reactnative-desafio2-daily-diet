import AsyncStorage from "@react-native-async-storage/async-storage"
import { SEQ_COLLECTION } from "@storage/storageConfig"

export async function get() {
  try {
    const storage = await AsyncStorage.getItem(SEQ_COLLECTION)
    const seqs: [] = storage ? JSON.parse(storage) : []
    return seqs
  } catch (error) {
    throw error
  }
}