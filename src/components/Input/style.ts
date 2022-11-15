import styled from "styled-components/native";
import MaskInput from 'react-native-mask-input';

export const Conteiner = styled.View`
    margin-bottom: 24px;
    min-width: 45%;
`;

export const InputField = styled.TextInput`
    height: 48px;
    padding: 14px;
    border: 1px solid ${({theme}) => theme.colors.gray[500]};
    border-radius: 6px;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize.md};
`;

export const InputDateHour = styled(MaskInput)`
    height: 48px;
    padding: 14px;
    border: 1px solid ${({theme}) => theme.colors.gray[500]};
    border-radius: 6px;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize.md};
`;

export const MultilineInput = styled(InputField)`
    height: 92px;
`;

export const Title = styled.Text`
    margin-bottom: 6px;
    color: ${({theme}) => theme.colors.gray[100]};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-family: ${({theme}) => theme.fontFamily.bold};
`;
