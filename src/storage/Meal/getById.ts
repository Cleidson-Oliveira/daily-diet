import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY = "@Daily-Diet:Meal";

interface IMeal {
    meal: string,
    date: string,
    hour: string, 
    inDiet: boolean,
}

export async function getAllMeals () {
    try {
        const storageMeal = await AsyncStorage.getItem(STORAGE_KEY);

        const mealData: IMeal[] = storageMeal ? JSON.parse(storageMeal) : [];

        return mealData;

    } catch (error) {
        console.log(error)
    }

}