import { ReactNode } from "react";
import { Modal } from "react-native";
import { ButtonConteiner, Conteiner, Content, ModalTitle } from "./style";

interface ModalProps {
    children: ReactNode,
    onClose(): void,
    isVisible: boolean,
    title: string
}

export function CustomModal ({ children, isVisible, onClose, title }: ModalProps) {

    return (
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <Conteiner>
                <Content>
                    <ModalTitle>{title}</ModalTitle>
                    <ButtonConteiner>
                        {children}
                    </ButtonConteiner>
                </Content>
            </Conteiner>
        </Modal>
    )
}