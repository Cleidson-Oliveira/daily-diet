import { ButtonNo, ButtonTitle, ButtonYes, Conteiner, Separator, StatIndicator, Title } from "./style";

interface SelectProps {
    title: string,
    active: "yes" | "no" | null,
}

export function Select ({ active, title }: SelectProps) {

    return (
        <Conteiner>
            <Title>{title}</Title>
            <ButtonYes active={active === "yes"}>
                <StatIndicator color="green"/>
                <Separator />
                <ButtonTitle>Sim</ButtonTitle>
            </ButtonYes>
            <Separator />
            <ButtonNo active={active === "no"}>
                <StatIndicator color="red"/>
                <Separator />
                <ButtonTitle>Não</ButtonTitle>
            </ButtonNo>
        </Conteiner>
    )
}