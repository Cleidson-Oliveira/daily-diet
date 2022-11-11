import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface ButtonProps extends TouchableOpacityProps {
    active: boolean,
}

interface StatsIndicatorProps {
    color: "red" | "green",
}

export const Conteiner = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
`;

export const Title = styled.Text`
    width: 100%;
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 6px;
`;

export const ButtonNo = styled((Button))`
    border: 2px solid ${({theme, active}) => active ? theme.colors.red.dark : theme.colors.transparent};
    background-color: ${({theme, active}) => active ? theme.colors.red.light : theme.colors.gray[600]};
`;

export const ButtonYes = styled((Button))`
    border: 2px solid ${({theme, active}) => active ? theme.colors.green.dark : theme.colors.transparent};
    background-color: ${({theme, active}) => active ? theme.colors.green.light : theme.colors.gray[600]};
`;

export const ButtonTitle = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Separator = styled.View`
    width: 10px;
`;

export const StatIndicator = styled.View<StatsIndicatorProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({theme, color}) => theme.colors[color].dark};
`;