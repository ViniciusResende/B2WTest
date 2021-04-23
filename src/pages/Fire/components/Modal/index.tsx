import React from 'react';

import { 
  Container, 
  ModalContent,
  Head,
  Body,
  Buttons 
} from './styles';

interface ModalProps {
  title: string;
  body: string;
  closeFunction?: () => void;
  confirmFunction: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <Container> 
      {/* implement click away close */}
      <ModalContent>
        <Head>
          <h2>{props.title}</h2>
        </Head>
        <Body>
          <strong>{props.body}</strong>
        </Body>
        <Buttons>
          {props.closeFunction && 
            <button 
              onClick={() => props.closeFunction && props.closeFunction()}
            >
              Cancelar
            </button>
          }
          <button onClick={() => props.confirmFunction()}>Confirmar</button>
        </Buttons>
      </ModalContent>
    </Container>
  );
}

export default Modal;