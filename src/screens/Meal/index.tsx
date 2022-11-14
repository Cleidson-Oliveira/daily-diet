import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Conteiner, Content, Header, Icon, Separator, StatsIndicator, SubTitle, Tag, TagTitle, TextDescription, Title } from "./style";
import { PencilSimple, Trash } from 'phosphor-react-native';
import { useEffect, useState } from "react";
import { getById } from "@storage/Meal/getById";
import { IMeal } from "@storage/MealDTO";
import { deleteById } from "@storage/Meal/remove";

interface RouteParams {
    id: string
}

export function Meal () {

    const [ meal, setMeal ] = useState<IMeal>({} as IMeal);
    const navigation = useNavigation();
    const route = useRoute();
    const { colors } = useTheme();

    const { id } = route.params as RouteParams;

    const handleBack = () => {
        navigation.navigate("home");
    }

    const handleEditMeal = () => {
        navigation.navigate("editmeal", { id });
    }
  
    const HandleDelete = async () => {
        await deleteById(id);
        handleBack();
    }

    useEffect(() => {
        getById(id)
        .then(meal => setMeal(meal!))
        .catch(err => console.log(err))
    }, [])

    return (
        <Conteiner inDiet={meal.inDiet}>
            <Header>
                <Icon onPress={handleBack}>
                    <ArrowLeft color={colors.gray[100]} size={20}/>
                </Icon>
                <Title>Refeição</Title>
            </Header>
            <Content>
                <Title>{meal.meal}</Title>
                <TextDescription>{meal.description}</TextDescription>

                <SubTitle>Data e hora</SubTitle>
                <TextDescription>{meal.date} às {meal.hour}</TextDescription>

                <Tag>
                    <StatsIndicator inDiet={meal.inDiet}/>
                    <TagTitle>{ meal.inDiet ? "Dentro da dieta" : "Fora da dieta"}</TagTitle>
                </Tag>

                <Separator />
                    <Button
                        onPress={handleEditMeal}
                        buttonTitle="Editar Refeição"
                    >
                        <PencilSimple color="white" size={18} />
                    </Button>
                    <Button 
                        buttonTitle="Remover Refeição" 
                        secondary
                        onPress={HandleDelete}
                    >
                        <Trash color={colors.gray[100]} size={18} />
                    </Button>
            </Content>
        </Conteiner>
    )
}