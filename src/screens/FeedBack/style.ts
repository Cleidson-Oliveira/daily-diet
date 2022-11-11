import { TextProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface TitleProps extends TextProps {
    type: "positive" | "negative"
}

export const Conteiner = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color: ${({theme}) => theme.colors.gray[700]};
`;

export const Title = styled.Text<TitleProps>`
    margin-bottom: 12px;
    color: ${({theme, type}) => type === "positive" ? theme.colors.green.dark : theme.colors.red.dark};
    font-size: ${({theme}) => theme.fontSize["2xl"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const SubTitle = styled.Text`
padding: 0px 24px;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[200]};
    font-size: ${({theme}) => theme.fontSize.md};
    font-family: ${({theme}) => theme.fontFamily.regular};
`;

export const FeedBackImage = styled.Image`
    margin: 32px;
`;

