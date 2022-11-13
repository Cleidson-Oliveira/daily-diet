import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from "react-native-uuid"
import { getAllMeals } from './getById';

const STORAGE_KEY = "@Daily-Diet:Meal";

interface IMeal {
    meal: string,
    date: string,
    hour: string, 
    inDiet: boolean,
}

export async function createMeal (data: IMeal) {
    try {
        const newMeal = {
            ...data,
            id: uuid.v4()
        }

        const storageMeal = await getAllMeals();

        const mealData: IMeal[] = storageMeal ? [ ...storageMeal, newMeal ] : [];

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mealData));
            
    } catch (error) {
        console.log(error)    
    }
}