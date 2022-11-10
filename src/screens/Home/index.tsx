import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { BodyText, Conteiner, Content, MealListTitle, NewMeal } from "./style";
import { MealListItem } from "@components/MealListItem";
import { SectionList } from "react-native";
import { DietStats } from "@components/DietStats";

export function Home () {

    const DATA = [
        {
          title: "09-11-2022",
          data: [
            {meal: "Pizza", hour: "22:30", inDiet: false},
            {meal: "Risotto", hour: "19:00", inDiet: true},
            {meal: "Burger", hour: "16:30", inDiet: false},
          ]
        },
        {
          title: "10-11-2022",
          data: [
            {meal: "French Fries", hour: "22:30", inDiet: false},
            {meal: "Fried Shrimps", hour: "19:00", inDiet: false},
            {meal: "Onion Rings", hour: "16:30", inDiet: false},
          ]
        },
        {
          title: "11-11-2022",
          data: [
            {meal: "Coke", hour: "22:30", inDiet: false},
            {meal: "Cake", hour: "19:00", inDiet: false},
            {meal: "Pizza", hour: "16:30", inDiet: false},
          ]
        },
        {
          title: "12-11-2022",
          data: [
            {meal: "Cheese Cake", hour: "22:30", inDiet: false},
            {meal: "Ice Cream", hour: "19:00", inDiet: false},
          ]
        }
    ];


    return (
      <Conteiner>
        <Header />
        <DietStats />
        <Content>
          <NewMeal>
            <BodyText>Refeições</BodyText>
            <Button buttonTitle="Nova Refeição"/>
          </NewMeal>

          <SectionList
            sections={DATA}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.meal + item.hour}
            renderItem={({item}) => <MealListItem data={item} />}
            renderSectionHeader={({ section: { title } }) => <MealListTitle>{title}</MealListTitle>}
          />

        </Content>
      </Conteiner>
    );
}
