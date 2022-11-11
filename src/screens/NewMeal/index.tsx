import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Conteiner, Content, DateTime, Header, Icon, Separator, Title } from "./style";
import { Plus } from 'phosphor-react-native';

interface NewMealProps {}

export function NewMeal (props: NewMealProps) {

    const { colors } = useTheme()

    return (
        <Conteiner>
            <Header>
                <Icon>
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