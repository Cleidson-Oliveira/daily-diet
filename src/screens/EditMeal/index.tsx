import { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { updateMeal } from "@storage/Meal/update";
import { getById } from "@storage/Meal/getById";
import { Button } from "@components/Button";
import { Input, InputDate, InputHour } from "@components/Input";
import { Select } from "@components/Select";
import { ArrowLeft, Plus } from 'phosphor-react-native';
import { Conteiner, Content, DateTime, Header, Icon, Separator, Title } from "./style";
import { verifyIfExistsEmptyFields } from "@utils/VerifyIfExistsEmptyFields";
import { Alert } from "react-native";

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
        try {
            if (verifyIfExistsEmptyFields([ meal, description, date, hour ])) {
                return Alert.alert("Atualizar refeição", "Todos os Campos devem estar preenchidos!");
            }

            await updateMeal({
                id,
                meal: meal.trim(),
                description: description.trim(),
                date,
                hour,
                inDiet: inDiet == "yes" ? true : false
            });
            
            navigate("home");
        } catch (error) {
            Alert.alert("Atualizar refeição", "Não foi possível cadastrar nova refeição.");
            console.log(error);
        }
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
                <Button buttonTitle="Salvar alterações" onPress={handleUpdateMeal}>
                    <Plus color="white" size={18} />
                </Button>
            </Content>
        </Conteiner>
    )
}