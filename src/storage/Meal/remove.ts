import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllMeals } from './getAll';
import { IMeal } from "../MealDTO"

const STORAGE_KEY = "@Daily-Diet:Meal";

export async function deleteById (id: string) {
    try {

        const storageMeal = await getAllMeals() as IMeal[];

        const mealData = storageMeal.filter((meal) => meal.id !== id);

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mealData));
            
    } catch (error) {
        throw error;
    }
}