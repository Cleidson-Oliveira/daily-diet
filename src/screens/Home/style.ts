import styled from "styled-components/native";

export const Conteiner = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.gray[700]};
    padding: 24px;
`;