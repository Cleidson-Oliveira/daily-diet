import { ReactNode } from "react";
import { Conteiner, Content } from "./style";

interface ListEmptyProps {
    content: ReactNode
}

export function ListEmpty (props: ListEmptyProps) {

    return (
        <Conteiner>
            <Content>{props.content}</Content>
        </Conteiner>
    )
}