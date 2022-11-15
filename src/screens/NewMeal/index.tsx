import { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input, InputDate, InputHour } from "@components/Input";
import { Select } from "@components/Select";

import { ArrowLeft, Plus } from 'phosphor-react-native';

import { Conteiner, Content, DateTime, Header, Icon, Separator, Title } from "./style";
import { createMeal } from "@storage/Meal/create";

interface NewMealProps {}

export function NewMeal (props: NewMealProps) {

    const [ meal, setMeal ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    const [ hour, setHour ] = useState("");
    const [ inDiet, setInDiet ] = useState<null | "no" | "yes">(null);

    const { colors } = useTheme()

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home");
    }

    const handleNewMeal = async () => {
        const newMeal = {
            meal: meal.trim(),
            description: description.trim(),
            date,
            hour,
            inDiet: inDiet == "yes" ? true : false 
        }
        await createMeal(newMeal);
        
        navigation.navigate("feedback", {type: inDiet == "yes" ? "positive" : "negative"});
    }

    const changeInDietStatus = (inDiet: "no" | "yes") => {
        setInDiet(inDiet)
    }

    return (
        <Conteiner>
            <Header>
                <Icon onPress={handleBack}>
                    <ArrowLeft color={colors.gray[100]} size={20}/>
                </Icon>
                <Title>Nova refeição</Title>
            </Header>
            <Content>
                <Input 
                    title="Nome" 
                    value={meal} 
                    onChangeText={setMeal}
                />
                <Input 
                    title="Descrição"
                    multiline
                    value={description} 
                    onChangeText={setDescription}
                />
                <DateTime>
                    <InputDate
                        title="Data"
                        keyboardType="numeric"
                        value={date}
                        onChangeText={setDate}
                        
                    />
                    <InputHour
                        title="Hora"
                        keyboardType="numeric"
                        value={hour}
                        onChangeText={setHour}
                    />
                </DateTime>

                <Select 
                    title="Está dentro da dieta?" 
                    active={inDiet} 
                    changeSelectStatus={changeInDietStatus}
                />

                <Separator />
                <Button buttonTitle="Cadastrar Refeição" onPress={handleNewMeal}>
                    <Plus color="white" size={18} />
                </Button>
            </Content>
        </Conteiner>
    )
}