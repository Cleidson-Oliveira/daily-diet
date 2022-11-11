import { ReactNode } from 'react';
import { Conteiner, Title } from "./style";

interface Props {
    buttonTitle: string,
    children?: ReactNode
}

export function Button ({ buttonTitle, children = "" }: Props) {
    return (
        <Conteiner>
            { children }
            <Title>
                {buttonTitle}
            </Title>
        </Conteiner>
    );
}
