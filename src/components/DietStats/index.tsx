import { ArrowUpRight } from "phosphor-react-native";
import { Conteiner, Title, Subtitle, Icon } from "./style";

export function DietStats () {
    return (
        <Conteiner>
            <Icon>
                <ArrowUpRight color="green" size={20}/>
            </Icon>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Conteiner>
    );
}
