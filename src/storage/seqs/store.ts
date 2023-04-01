import AsyncStorage from "@react-native-async-storage/async-storage";
import { SeqStorageDTO } from "./SeqStorageDTO";
import { SEQ_COLLECTION } from "@storage/storageConfig";

export async function store(newSeq:SeqStorageDTO) {
  try {
    const storage = JSON.stringify([newSeq])
    await AsyncStorage.setItem(SEQ_COLLECTION, storage);
  } catch (error) {
    throw error
  }
}