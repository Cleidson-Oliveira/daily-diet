import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from "react-native-uuid"
import { getAllMeals } from './getAll';
import { IMeal } from "../MealDTO"

const STORAGE_KEY = "@Daily-Diet:Meal";

export async function createMeal (data: IMeal) {
    try {
        const newMeal = {
            ...data,
            id: uuid.v4() as string
        }
        
        const storageMeal = await getAllMeals();

        const mealData: IMeal[] = storageMeal ? [ ...storageMeal, newMeal ] : [];

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mealData));
            
    } catch (error) {
        throw error;
    }
}