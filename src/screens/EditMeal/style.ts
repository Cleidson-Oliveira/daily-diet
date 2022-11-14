import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Conteiner = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.gray[500]};
`;

export const Content = styled.View`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 32px 24px;
    background-color: ${({theme}) => theme.colors.gray[700]};
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    align-items: center;
    height: 100px;
    position: relative;
`;

export const Icon = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    padding: 4px;
    position: absolute;
    left: 16px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["md"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const DateTime = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const Separator = styled.View`
    flex: 1;
`;

