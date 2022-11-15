import { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { createMeal } from "@storage/Meal/create";
import { Button } from "@components/Button";
import { Input, InputDate, InputHour } from "@components/Input";
import { Select } from "@components/Select";
import { ArrowLeft, Plus } from 'phosphor-react-native';
import { Conteiner, Content, DateTime, Header, Icon, Separator, Title } from "./style";
import { verifyIfExistsEmptyFields } from "@utils/VerifyIfExistsEmptyFields";

export function NewMeal () {

    const [ meal, setMeal ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");
    const [ hour, setHour ] = useState("");
    const [ inDiet, setInDiet ] = useState<null | "no" | "yes">(null);

    const { colors } = useTheme();

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home");
    }

    const handleNewMeal = async () => {
        try {
            if (verifyIfExistsEmptyFields([ meal, description, date, hour ])) {
                return Alert.alert("Nova refeição", "Todos os Campos devem estar preenchidos!");
            }

            await createMeal({
                meal: meal.trim(),
                description: description.trim(),
                date,
                hour,
                inDiet: inDiet == "yes" ? true : false 
            });
            
            navigation.navigate("feedback", {type: inDiet == "yes" ? "positive" : "negative"});

        } catch (error) {
  
            Alert.alert("Nova refeição", "Não foi possível cadastrar nova refeição.");
            console.log(error);
        }
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