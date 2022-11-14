import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { MealListItem } from "@components/MealListItem";
import { SectionList } from "react-native";
import { DietStatus } from "@components/DietStatus";

import { getAllMeals } from '@storage/Meal/getAll';

import { Plus } from "phosphor-react-native";

import { BodyText, Conteiner, Content, MealListTitle, NewMeal } from "./style";

import { IMeal } from "@storage/MealDTO"
import { ListEmpty } from '@components/ListEmpty';

interface MealSection {
  title: string,
  data: IMeal[]
}

export function Home () {

    const [ mealData, setMealData ] = useState<MealSection[]>([]);
    const [ percentageOfMealsInTheDiet, setPercentageOfMealsInTheDiet ] = useState(0);
    const navigation = useNavigation();

    const handleGoNewMeal = () => {
      navigation.navigate("newmeal");
    }

    const fetchMeals = async () => {
      const meals = await getAllMeals()
      return meals
    }

    const transformData = (data: IMeal[]) => {
      const listWithDateLikeTitle = {} as {[key: string]: IMeal[]}
      data.forEach((value) => {

        return !!listWithDateLikeTitle[value.date] 
          ? listWithDateLikeTitle[value.date].push(value) 
          : listWithDateLikeTitle[value.date] = [value]
      })

      return Object.keys(listWithDateLikeTitle).map((key) => ({title: key, data: listWithDateLikeTitle[key]}))
    }

    const computeMealsPercentageInDiet = () => {
      let MealAmount = 0
      const percentageOfMealsInTheDiet = mealData.reduce((acc, cur) => {
        let curAmount = 0

        cur.data.forEach((a) => {
          MealAmount++
          if (a.inDiet) { curAmount++ }
        })

        return acc + curAmount
      }, 0)

      return (percentageOfMealsInTheDiet * 100 / MealAmount).toFixed(2)
    }

    useFocusEffect(useCallback(() => {
      fetchMeals()
      .then((data) => {
        setMealData(transformData(data!))
      })
      .catch(err => console.log(err))
    },[]))

    useEffect(() => {
      if (mealData.length > 0) {
        const percentageOfMealsInTheDiet = computeMealsPercentageInDiet()

        setPercentageOfMealsInTheDiet(+percentageOfMealsInTheDiet)
      }
    }, [mealData])

    return (
      <Conteiner>
        <Header />
        <DietStatus statePercentage={percentageOfMealsInTheDiet}/>
        <Content>
          <NewMeal>
            <BodyText>Refeições</BodyText>
            <Button 
              buttonTitle="Nova Refeição"
              onPress={handleGoNewMeal}
            >
              <Plus color="white" size={18}/>
            </Button>
          </NewMeal>

          <SectionList
            sections={mealData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.meal + item.hour}
            renderItem={({item}) => <MealListItem data={item} />}
            renderSectionHeader={({ section: { title }}) => <MealListTitle>{title}</MealListTitle>}
            ListEmptyComponent={<ListEmpty content="Começe a controlar sua alimentação adicionando suas refeições!"/>}
          />

        </Content>
      </Conteiner>
    );
}
