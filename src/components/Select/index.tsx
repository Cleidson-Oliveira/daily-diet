import { ButtonNo, ButtonTitle, ButtonYes, Conteiner, Separator, StatIndicator, Title } from "./style";

interface SelectProps {
    title: string,
    active: "yes" | "no" | null,
    changeSelectStatus(inDiet: "yes" | "no"): void
}

export function Select ({ active, changeSelectStatus, title }: SelectProps) {

    const fn =(aa: "yes" | "no") => {
        changeSelectStatus(aa)
    }

    return (
        <Conteiner>
            <Title>{title}</Title>
            <ButtonYes active={active === "yes"} onPress={()=>fn("yes")}>
                <StatIndicator color="green"/>
                <Separator />
                <ButtonTitle>Sim</ButtonTitle>
            </ButtonYes>
            <Separator />
            <ButtonNo active={active === "no"} onPress={()=>fn("no")}>
                <StatIndicator color="red"/>
                <Separator />
                <ButtonTitle>Não</ButtonTitle>
            </ButtonNo>
        </Conteiner>
    )
}