import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: {
        bestSeq: number;
        countMeals: number;
        countInside: number;
        countOutside: number;
        percent: number;
      };
      store: undefined;
      update: {
        meal: MealStorageDTO
      };
      open: {
        meal: MealStorageDTO
      };
      success: {
        status: boolean
      }
    }
  }
}