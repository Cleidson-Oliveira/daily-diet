import { Conteiner, MealHour, MealName, Separator, Status } from "./style";

interface Data {
    hour: string,
    meal: string,
    inDiet: boolean
}

interface Props {
    data: Data
}

export function MealListItem ({ data }: Props) {

    return (
        <Conteiner>
            <MealHour>{data.hour}</MealHour>
            <Separator />
            <MealName>{data.meal}</MealName>
            <Status />
        </Conteiner>
    );
}