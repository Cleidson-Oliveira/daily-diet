import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { Card, CardSubtitle, CardTitle, Conteiner, Content, Header, HeaderSubtitle, HeaderTitle, Icon, Title } from "./style";

interface StatsProps {}

export function Stats (props: StatsProps) {

    const navigation = useNavigation();

    const handleGoBack = () => {
      navigation.navigate("home");
    }

    return (
        <Conteiner>
            <Header>
                <Icon onPress={() => handleGoBack()}>
                    <ArrowLeft color="green" size={24}/>
                </Icon>
                <HeaderTitle>90,86%</HeaderTitle>
                <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>
            </Header>
            <Content>
                <Title>Estatísticas gerais</Title>
                <Card color="gray">
                    <CardTitle>22</CardTitle>
                    <CardSubtitle>Melhor sequência de pratos dentro da dieta</CardSubtitle>
                </Card>
                <Card color="gray">
                    <CardTitle>109</CardTitle>
                    <CardSubtitle>Refeições Registradas</CardSubtitle>
                </Card>
                <Card color="green">
                    <CardTitle>99</CardTitle>
                    <CardSubtitle>Refeições dentro da dieta</CardSubtitle>
                </Card>
                <Card color="red">
                    <CardTitle>10</CardTitle>
                    <CardSubtitle>Refeições fora da dieta</CardSubtitle>
                </Card>
            </Content>
        </Conteiner>
    )
}