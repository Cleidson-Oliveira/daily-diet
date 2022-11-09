import styled from "styled-components/native";

export const Conteiner = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50px;
    padding: 16px 24px;
    border-radius: 6px;
    background-color: ${({theme})=> theme.colors.gray[200]};
`;

export const Title = styled.Text`
    margin: 0 12px;
    font-size: ${({theme})=> theme.fontSize.sm};
    font-family: ${({theme})=> theme.fontFamily.bold};
    color: ${({theme})=> theme.colors.white};
`;

