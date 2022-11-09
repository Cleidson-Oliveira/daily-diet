import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Conteiner = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.gray[700]};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
`;

export const NewMeal = styled.View`
    margin-bottom: 32px;
`;

export const BodyText = styled.Text`
    margin-bottom: 8px;
    font-size: ${({theme})=> theme.fontSize.md};
    font-family: ${({theme})=> theme.fontFamily.regular};
    color: ${({theme})=> theme.colors.gray[100]};
`;

export const MealListTitle = styled.Text`
    margin: 10px 0;
    font-size: ${({theme})=> theme.fontSize.lg};
    font-family: ${({theme})=> theme.fontFamily.bold};
    color: ${({theme})=> theme.colors.gray[100]};
`;
