import { useNavigation } from "@react-navigation/native";
import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { Conteiner, Title, Subtitle, Icon } from "./style";

interface Props extends TouchableOpacityProps {
    expand?: boolean 
}

export function DietStats ({ expand = false, ...rest }: Props) {

    const navigation = useNavigation();

    const handleGoState = () => {
      navigation.navigate("stats");
    }

    return (
        <Conteiner onPress={() => handleGoState()} {...rest}>
            <Icon >
                <ArrowUpRight color="green" size={24}/>
            </Icon>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Conteiner>
    );
}
