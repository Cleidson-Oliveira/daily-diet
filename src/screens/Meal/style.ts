import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface StatusProps {
    inDiet: boolean
}

export const Conteiner = styled(SafeAreaView)<StatusProps>`
    flex: 1;
    background-color: ${({ theme, inDiet }) => inDiet ? theme.colors.green.light : theme.colors.red.light};
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
    margin-bottom: 8px;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["lg"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const SubTitle = styled.Text`
    margin-bottom: 6px;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["md"]};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const TextDescription = styled.Text`
    margin-bottom: 24px;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["md"]};
    font-family: ${({theme}) => theme.fontFamily.regular};
`;

export const Tag = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding: 10px;
    border-radius: 17px;
    background-color: ${({theme}) => theme.colors.gray[600]};
`;

export const StatsIndicator = styled.View<StatusProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 12px;
    background-color: ${({ theme, inDiet }) => inDiet ? theme.colors.green.dark : theme.colors.red.dark};
`;

export const TagTitle = styled.Text`
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize["sm"]};
    font-family: ${({theme}) => theme.fontFamily.regular};
`;

export const Separator = styled.View`
    flex: 1;
`;

