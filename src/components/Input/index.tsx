import { TextInputProps } from "react-native";
import { Conteiner, InputField, MultilineInput, Title } from "./style";

interface InputProps extends TextInputProps {
    title: string,
}

export function Input ({ title, multiline, ...rest }: InputProps) {

    return (
        <Conteiner>
            <Title>{title}</Title>
            { multiline && <MultilineInput multiline numberOfLines={4} style={{ textAlignVertical: "top" }} {...rest}/>}
            { !multiline && <InputField {...rest} />}
        </Conteiner>
    )
}