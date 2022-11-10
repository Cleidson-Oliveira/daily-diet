import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { Conteiner, Title, Subtitle, IconRight, IconLeft } from "./style";

interface Props extends TouchableOpacityProps {
    expand?: boolean 
}

export function DietStats ({ expand = false, ...rest }: Props) {
    return (
        <Conteiner expand={expand} {...rest}>
            { expand 
                ? <IconLeft>
                    <ArrowLeft color="green" size={20}/>
                </IconLeft>
                : <IconRight>
                    <ArrowUpRight color="green" size={20}/>
                </IconRight>
            }
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Conteiner>
    );
}
