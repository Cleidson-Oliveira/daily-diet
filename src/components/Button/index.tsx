import { ReactNode } from 'react';
import { Conteiner, Title } from "./style";

interface Props {
    buttonTitle: string,
    secondary?: boolean,
    children?: ReactNode
}

export function Button ({ buttonTitle, secondary = false, children = "" }: Props) {
    return (
        <Conteiner secondary={secondary}>
            { children }
            <Title secondary={secondary}>
                {buttonTitle}
            </Title>
        </Conteiner>
    );
}
