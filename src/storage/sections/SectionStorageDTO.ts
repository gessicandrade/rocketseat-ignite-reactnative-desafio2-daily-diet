import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export type SectionStorageDTO = {
  title: string;
  data: MealStorageDTO[]
}