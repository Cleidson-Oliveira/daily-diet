import styled from "styled-components/native";

export const Conteiner = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    padding: 0 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray[500]};
    border-radius: 6px;
    margin: 4px 0;
`;

export const MealHour = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.gray[100]};
`;

export const MealName = styled.Text`
    flex: 1;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Status = styled.View`
    height: 14px;
    width: 14px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.red.mid};
`;

export const Separator = styled.View`
    width: 2px;
    height: 14px;
    margin: 0 12px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
`;