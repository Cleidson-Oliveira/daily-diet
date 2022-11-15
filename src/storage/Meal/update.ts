import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllMeals } from './getAll';
import { IMeal } from "../MealDTO"

const STORAGE_KEY = "@Daily-Diet:Meal";

export async function updateMeal (data: IMeal) {
    try {
        const updatedMeal = {
            ...data,
        }
        
        const storageMeal = await getAllMeals();

        const mealDateUpdated: IMeal[] = storageMeal 
            ? storageMeal.map((meal) => meal.id === updatedMeal.id ? updatedMeal : meal) 
            : [];

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mealDateUpdated));
            
    } catch (error) {
        throw error;
    }
}