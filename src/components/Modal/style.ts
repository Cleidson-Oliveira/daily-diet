import styled from "styled-components/native";

export const Conteiner = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #00000080;
`;

export const Content = styled.View`
    margin: 20px;
    background-color: white;
    border-radius: 8px;
    padding: 35px;
    align-items: center;
`;

export const ButtonConteiner = styled.View`
    flex-direction: row;
`;

export const ModalTitle = styled.Text`
    margin-bottom: 20px;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[200]};
    font-size: ${({theme}) => theme.fontSize["lg"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;