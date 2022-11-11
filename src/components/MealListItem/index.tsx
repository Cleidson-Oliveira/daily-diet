import { TouchableOpacityProps } from "react-native";
import { Conteiner, MealHour, MealName, Separator, Status } from "./style";

interface Data {
    hour: string,
    meal: string,
    inDiet: boolean
}

interface Props extends TouchableOpacityProps {
    data: Data
}

export function MealListItem ({ data, ...rest}: Props) {

    return (
        <Conteiner {...rest}>
            <MealHour>{data.hour}</MealHour>
            <Separator />
            <MealName>{data.meal}</MealName>
            <Status />
        </Conteiner>
    );
}