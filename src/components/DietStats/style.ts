import styled from "styled-components/native";

export const Conteiner = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 102px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 8px;
    margin-bottom: 40px;
    position: relative;
    background-color: ${({theme}) => theme.colors.green.light};
`;

export const Icon = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    padding: 4px;
    position: absolute;
    top: 16px;
    right: 16px;
`;

export const Title = styled.Text`
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["2xl"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const Subtitle = styled.Text`
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[200]};
    font-size: ${({theme}) => theme.fontSize["sm"]};
    font-family: ${({theme}) => theme.fontFamily.regular};
`;

