import { Button, Content, ContentButton, Message, ModalContainer, TextButton, Window } from "./styles";

type ModalProps = {
    isShowModal: boolean;
    hideModal: () => void;
    onRemove: () => void;
}

export function ModalRemove({isShowModal, hideModal, onRemove}: ModalProps){
    return(
        <ModalContainer isVisible={isShowModal}>
            <Window>
                <Content>
                    <Message>Deseja realmente excluir o registro da refeição?</Message>
                    <ContentButton>
                        <Button onPress={hideModal} type="primary">
                            <TextButton type="primary">Cancelar</TextButton>
                        </Button>
                        <Button onPress={onRemove} type="secondary">
                            <TextButton type="secondary">Sim, excluir</TextButton>
                        </Button>
                    </ContentButton>
                </Content>
            </Window>
        </ModalContainer>
    )
}