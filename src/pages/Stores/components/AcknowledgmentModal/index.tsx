import React from 'react';
import { useCart } from '../../../../context/CartContext';

import Modal from '../Modal';

const AcknowledgmentModal: React.FC = () => {
  const { acknowledgmentModalIsInDisplay, totalPrice, restartShop } = useCart();
  const modalTitle = 'Obrigado pela compra!!!';
  const modalBody = `Você ganhou de volta: R$${totalPrice},00.`;
  return (
    <>
      {acknowledgmentModalIsInDisplay && (
        <Modal 
          title={modalTitle} 
          body={modalBody} 
          confirmFunction={restartShop}
        />
      )}
    </>
  );
}

export default AcknowledgmentModal;