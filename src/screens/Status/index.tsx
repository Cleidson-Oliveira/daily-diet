import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllMeals } from "@storage/Meal/getAll";
import { IMeal } from "@storage/MealDTO";
import { ArrowLeft } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { Card, CardSubtitle, CardTitle, Conteiner, Content, Header, HeaderSubtitle, HeaderTitle, Icon, Title } from "./style";

export function Status () {

    const { colors } = useTheme();

    const [ mealData, setMealData ] = useState<IMeal[]>([]);
    const [ percentageOfMealsInTheDiet, setPercentageOfMealsInTheDiet ] = useState(0);
    const [ mealsAmountInDiet, setMealsAmountInDiet ] = useState(0);
    const [ mealsAmountOutDiet, setMealsAmountOutDiet ] = useState(0);
    const [ bestSequenceOfMeals, setBestSequenceOfMeal ] = useState(0);

    const navigation = useNavigation();

    const handleGoBack = () => {
      navigation.navigate("home");
    }

    const fetchMeals = async () => {
        const meals = await getAllMeals()
        return meals
    }

    const computeMealsPercentageInDiet = () => {

        const percentageOfMealsInTheDiet = mealData.reduce((acc, cur) => {
            if (cur.inDiet) { acc++ }
            return acc
        }, 0)

        return (percentageOfMealsInTheDiet * 100 / mealData.length).toFixed(2)
    }

    const computeMealsAmountInAndOutDiet = () => {
        let inDiet = 0;
        let outDiet = 0;
        mealData.forEach(meal => meal.inDiet ? inDiet++ : outDiet++);
        return [inDiet, outDiet]
    }

    const getBestSequenceOfMeal = () => {
        let bestSequence = 0;
        let currentSequence = 0;

        mealData.forEach((meal) => {
            if (meal.inDiet) {
                currentSequence++
                bestSequence = bestSequence < currentSequence ? currentSequence : bestSequence
            } else {
                currentSequence = 0
            }
            
        })

        return bestSequence;
    }
  
    useFocusEffect(useCallback(() => {
        fetchMeals()
        .then((data) => {
            setMealData(data!)
        })
        .catch(err => console.log(err))
    },[]))
  
    useEffect(() => {
        if (mealData.length > 0) {
            const percentageOfMealsInTheDiet = computeMealsPercentageInDiet();
            const [ inDiet, outDiet ] = computeMealsAmountInAndOutDiet();
            const bestSequenceOfMeals = getBestSequenceOfMeal()

            setPercentageOfMealsInTheDiet(+percentageOfMealsInTheDiet);
            setMealsAmountInDiet(inDiet);
            setMealsAmountOutDiet(outDiet);
            setBestSequenceOfMeal(bestSequenceOfMeals);
        }
    }, [mealData])
    
    return (
        <Conteiner status={percentageOfMealsInTheDiet > 60 ? "positive" : "negative"}>
            <Header>
                <Icon onPress={() => handleGoBack()}>
                    <ArrowLeft 
                        color={percentageOfMealsInTheDiet > 60 ? colors.green.dark : colors.red.dark}
                        size={24}
                    />
                </Icon>
                <HeaderTitle>{percentageOfMealsInTheDiet}%</HeaderTitle>
                <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>
            </Header>
            <Content>
                <Title>Estatísticas gerais</Title>
                <Card color="gray">
                    <CardTitle>{bestSequenceOfMeals}</CardTitle>
                    <CardSubtitle>Melhor sequência de pratos dentro da dieta</CardSubtitle>
                </Card>
                <Card color="gray">
                    <CardTitle>{mealData.length}</CardTitle>
                    <CardSubtitle>Refeições Registradas</CardSubtitle>
                </Card>
                <Card color="green">
                    <CardTitle>{mealsAmountInDiet}</CardTitle>
                    <CardSubtitle>Refeições dentro da dieta</CardSubtitle>
                </Card>
                <Card color="red">
                    <CardTitle>{mealsAmountOutDiet}</CardTitle>
                    <CardSubtitle>Refeições fora da dieta</CardSubtitle>
                </Card>
            </Content>
        </Conteiner>
    )
}