import { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";

import { ArrowLeft, Plus } from 'phosphor-react-native';

import { Conteiner, Content, DateTime, Header, Icon, Separator, Title } from "./style";
import { updateMeal } from "@storage/Meal/update";
import { getById } from "@storage/Meal/getById";

interface RouteParams {
    id: string
}

export function EditMeal () {
    const { colors } = useTheme()
    
    const [ meal, setMeal ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    const [ hour, setHour ] = useState("");
    const [ inDiet, setInDiet ] = useState<null | "no" | "yes">(null);

    const route = useRoute();
    const { id } = route.params as RouteParams;

    const { goBack, navigate } = useNavigation();

    const handleBack = () => {
        goBack();
    }

    const handleUpdateMeal = async () => {
        const updatedMeal = {
            id,
            meal: meal.trim(),
            description: description.trim(),
            date,
            hour,
            inDiet: inDiet == "yes" ? true : false 
        }
        await updateMeal(updatedMeal);
        
        navigate("home");
    }

    const changeInDietStatus = (inDiet: "no" | "yes") => {
        setInDiet(inDiet)
    }

    useEffect(() => {
        getById(id)
        .then(meal => {
            setMeal(meal?.meal!);
            setDescription(meal?.description!);
            setDate(meal?.date!);
            setHour(meal?.hour!);
            setInDiet(meal?.inDiet! ? "yes" : "no");
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Conteiner>
            <Header>
                <Icon onPress={handleBack}>
                    <ArrowLeft color={colors.gray[100]} size={20}/>
                </Icon>
                <Title>Editar refeição</Title>
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
                    <Input 
                        title="Data" 
                        autoComplete="birthdate-full"
                        value={date}
                        onChangeText={setDate}
                    />
                    <Input 
                        title="Hora"
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
                <Button buttonTitle="Salvar alterações" onPress={handleUpdateMeal}>
                    <Plus color="white" size={18} />
                </Button>
            </Content>
        </Conteiner>
    )
}