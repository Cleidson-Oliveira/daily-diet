import { TextInputProps } from "react-native";
import { Conteiner, InputField, MultilineInput, Title, InputDateHour } from "./style";

import { DATE_DDMMYYYY } from "@utils/InputDateMask";
import { HOUR_HHMM } from "@utils/InputHourMask";

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
export function InputDate ({ title, ...rest }: InputProps) {

    return (
        <Conteiner>
            <Title>{title}</Title>
            <InputDateHour 
                placeholder="01-01-2000"
                mask={DATE_DDMMYYYY}
                {...rest}
            />
        </Conteiner>
    )
}

export function InputHour ({ title, ...rest }: InputProps) {

    return (
        <Conteiner>
            <Title>{title}</Title>
            <InputDateHour
                placeholder="00:00"
                mask={HOUR_HHMM}
                {...rest}
            />
        </Conteiner>
    )
}