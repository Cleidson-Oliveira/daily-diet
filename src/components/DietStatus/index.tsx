import { useNavigation } from "@react-navigation/native";
import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Conteiner, Title, Subtitle, Icon } from "./style";

interface Props extends TouchableOpacityProps {
    statePercentage: number 
}

export function DietStatus ({ statePercentage, ...rest }: Props) {

    const { colors } = useTheme();
    const { navigate } = useNavigation();

    const PERCENTAGE_OF_GOOD_MEALS = 60;
    const inDiet = statePercentage < PERCENTAGE_OF_GOOD_MEALS ? false : true

    const handleGoState = () => {
        navigate("status");
    }

    return (
        <Conteiner 
            inDiet={inDiet}
            onPress={() => handleGoState()}
            {...rest}
        >
            <Icon >
                <ArrowUpRight color={inDiet ? colors.green.dark : colors.red.dark} size={24}/>
            </Icon>
            <Title>{statePercentage}%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Conteiner>
    );
}
