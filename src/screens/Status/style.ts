import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface CardProps {
    color: "red" | "green" | "gray",
}

interface ConteinerProps {
    status: "positive" | "negative",
}

export const Conteiner = styled(SafeAreaView)<ConteinerProps>`
    flex: 1;
    background-color: ${({theme, status}) => status === "positive" ? theme.colors.green.light : theme.colors.red.light};
`;

export const Header = styled(SafeAreaView)`
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 8px;
    margin-bottom: 40px;
    position: relative;
`;

export const HeaderTitle = styled.Text`
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["2xl"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const HeaderSubtitle = styled.Text`
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[200]};
    font-size: ${({theme}) => theme.fontSize["sm"]};
    font-family: ${({theme}) => theme.fontFamily.regular};
`;

export const Icon = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 4px;
    position: absolute;
    top: 16px;
    left: 16px;
`;

export const Content = styled.View`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 24px;
    background-color: ${({theme}) => theme.colors.gray[700]};
`;

export const Title = styled.Text`
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["md"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const Card = styled.View<CardProps>`
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 8px;
    background-color: ${({theme, color}) => color !== "gray" ? theme.colors[color].light : theme.colors.gray[600]};
`;

export const CardTitle = styled.Text`
    margin-bottom: 10px;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["xl"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const CardSubtitle = styled.Text`
    text-align: center;
    color: ${({theme}) => theme.colors.gray[200]};
    font-size: ${({theme}) => theme.fontSize["sm"]};
    font-family: ${({theme}) => theme.fontFamily.regular};
`;