import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Conteiner, FeedBackImage, SubTitle, Title } from "./style";

type TFeedback = "positive" | "negative";
interface RouteParams {
    type: TFeedback
}

export function Feedback () {

    const navigation = useNavigation();
    const route = useRoute();
    const { type } = route.params as RouteParams;

    const handleGoBack = () => {
        navigation.navigate("home")
    }

    const content = {
        "positive": {
            "title": "Continue assim!",
            "subTitle": "Você continua dentro da dieta. Muito bem!",
        },
        "negative": {
            "title": "Que pena!",
            "subTitle": "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!",
        }
    }

    const feedbackType: TFeedback = type

    return (
        <Conteiner>
            <Title type={feedbackType}>
                {content[feedbackType].title}
            </Title>
            <SubTitle>
                {content[feedbackType].subTitle}                
            </SubTitle>
            { feedbackType === "positive"
                ? <FeedBackImage source={require("@assets/feedback-positive.png")}/>
                : <FeedBackImage source={require("@assets/feedback-negative.png")}/>
            }
            <Button buttonTitle="Ir para a página inicial" onPress={handleGoBack}/>
        </Conteiner>
    )
}