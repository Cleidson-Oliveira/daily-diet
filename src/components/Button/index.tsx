import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Conteiner, Title } from "./style";

interface Props extends TouchableOpacityProps{
    buttonTitle: string,
    secondary?: boolean,
    children?: ReactNode
}

export function Button ({ buttonTitle, secondary = false, children = "", ...rest }: Props) {
    return (
        <Conteiner secondary={secondary} {...rest}>
            { children }
            <Title secondary={secondary}>
                {buttonTitle}
            </Title>
        </Conteiner>
    );
}
