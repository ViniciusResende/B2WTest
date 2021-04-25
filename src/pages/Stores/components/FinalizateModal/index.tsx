import React from 'react';
import { useCart } from '../../../../context/CartContext';

import Modal from '../Modal';

const FinalizateModal: React.FC = () => {
  const { finalizeModalIsInDisplay, finalizeModalIsInDisplayHandler, totalPrice, finalizePurchaseHanlder } = useCart();
  const modalTitle = 'Você deseja finalizar a compra?';
  const modalBody = `O valor da compra ficou em R$${totalPrice},00.`
  return (
    <>
      {finalizeModalIsInDisplay && (
        <Modal 
          title={modalTitle} 
          body={modalBody} 
          closeFunction={finalizeModalIsInDisplayHandler} 
          confirmFunction={finalizePurchaseHanlder}
        />
      )}
    </>
  );
}

export default FinalizateModal;