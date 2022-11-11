import { Button } from "@components/Button";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Conteiner, Content, Header, Icon, Separator, StatsIndicator, SubTitle, Tag, TagTitle, TextDescription, Title } from "./style";
import { PencilSimple, Trash } from 'phosphor-react-native';
import { View } from "react-native";

export function Meal () {

    const { colors } = useTheme()

    return (
        <Conteiner>
            <Header>
                <Icon>
                    <ArrowLeft color={colors.gray[100]} size={20}/>
                </Icon>
                <Title>Refeição</Title>
            </Header>
            <Content>
                <Title>Sanduíche</Title>
                <TextDescription>Sanduíche de pão integral com atum e salada de alface e tomate</TextDescription>

                <SubTitle>Data e hora</SubTitle>
                <TextDescription>11/11/2022 às 16:00</TextDescription>

                <Tag>
                    <StatsIndicator />
                    <TagTitle>Fora da dieta</TagTitle>
                </Tag>

                <Separator />
                <View>
                    <Button buttonTitle="Cadastrar Refeição">
                        <PencilSimple color="white" size={18} />
                    </Button>
                    <Button buttonTitle="Cadastrar Refeição" secondary>
                        <Trash color={colors.gray[100]} size={18} />
                    </Button>
                </View>
            </Content>
        </Conteiner>
    )
}