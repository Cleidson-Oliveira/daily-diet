import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";

import { ArrowLeft, Plus } from 'phosphor-react-native';

import { Conteiner, Content, DateTime, Header, Icon, Separator, Title } from "./style";

interface NewMealProps {}

export function NewMeal (props: NewMealProps) {

    const { colors } = useTheme()

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("home")
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
                <Input title="Nome" />
                <Input title="Descrição" multiline/>
                <DateTime>
                    <Input title="Data" autoComplete="birthdate-full"/>
                    <Input title="Hora" />
                </DateTime>
                <Select title="Está dentro da dieta?" active={null}/>
                <Separator />
                <Button buttonTitle="Cadastrar Refeição"><Plus color="white" size={18} /></Button>
            </Content>
        </Conteiner>
    )
}