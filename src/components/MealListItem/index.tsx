import { useNavigation } from "@react-navigation/native";
import { IMeal } from "@storage/MealDTO";
import { TouchableOpacityProps } from "react-native";
import { Conteiner, MealHour, MealName, Separator, Status } from "./style";

interface Props extends TouchableOpacityProps {
    data: Omit<IMeal, "date">
}

export function MealListItem ({ data, ...rest}: Props) {

    const navigation = useNavigation();

    const handleMealDetail = () => {
        navigation.navigate("meal", {id: data.id!});
    }

    return (
        <Conteiner {...rest} onPress={handleMealDetail}>
            <MealHour>{data.hour}</MealHour>
            <Separator />
            <MealName>{data.meal}</MealName>
            <Status inDiet={data.inDiet}/>
        </Conteiner>
    );
}