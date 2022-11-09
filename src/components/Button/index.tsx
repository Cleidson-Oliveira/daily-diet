import { Plus } from 'phosphor-react-native';
import { Conteiner, Title } from "./style";

interface Props {
    buttonTitle: string,
    icon?: string,
}

export function Button ({ icon, buttonTitle }: Props) {
    return (
        <Conteiner>
            <Plus color="white" size={18}/>
            <Title>
                {buttonTitle}
            </Title>
        </Conteiner>
    );
}
