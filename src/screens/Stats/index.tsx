import { DietStats } from "@components/DietStats";
import { Card, CardSubtitle, CardTitle, Conteiner, Content, Title } from "./style";

interface StatsProps {}

export function Stats (props: StatsProps) {

    return (
        <Conteiner>
            <DietStats expand/>
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