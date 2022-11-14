import styled from "styled-components/native";

export const Conteiner = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export const Content = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.lg};
    font-family: ${({theme}) => theme.fontFamily.regular};
    color: ${({theme}) => theme.colors.gray[200]};
`