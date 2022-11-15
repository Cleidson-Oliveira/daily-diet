import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMeal } from "../MealDTO"

const STORAGE_KEY = "@Daily-Diet:Meal";

export async function getById (id: string) {
    try {
        const storageMeal = await AsyncStorage.getItem(STORAGE_KEY);

        if (!storageMeal) throw new Error("Este Id Não existe")

        const mealData: IMeal[] = JSON.parse(storageMeal);

        return mealData.find((meal) => meal.id === id)

    } catch (error) {
        throw error;
    }

}