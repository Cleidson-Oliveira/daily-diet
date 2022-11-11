import styled from "styled-components/native";

interface Props {
    secondary: boolean
}

export const Conteiner = styled.TouchableOpacity<Props>`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50px;
    padding: 16px 24px;
    border-radius: 6px;
    border: 1px solid ${({theme, secondary}) => secondary ? theme.colors.gray[100] : theme.colors.transparent};
    margin-top: 10px;
    background-color: ${({theme, secondary}) => secondary ? theme.colors.gray[600] : theme.colors.gray[200]};
`;

export const Title = styled.Text<Props>`
    margin: 0 12px;
    font-size: ${({theme})=> theme.fontSize.sm};
    font-family: ${({theme})=> theme.fontFamily.bold};
    color: ${({theme, secondary}) => secondary ? theme.colors.gray[100] : theme.colors.white};
`;

