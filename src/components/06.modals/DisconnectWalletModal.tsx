import React from 'react';
import ButtonContained from '../02.buttons/ButtonContained';
import './styles/disconnect-wallet-modal.scss';
import VoteeModal from '.';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DisconnectWalletModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <VoteeModal
      title="Disconnect Wallet"
      open={isOpen}
      onCancel={onClose}
      wrapClassName={`disconnect-wallet-modal`}
    >
      <div className="modal-disconnect">
        <div className="modal-disconnect__content">
          <span>You have to connect your wallet again to trade.</span> <span>Are you sure?</span>
        </div>
        <ButtonContained fullWidth className="button-confirm" onClick={onConfirm}>
          Confirm
        </ButtonContained>
      </div>
    </VoteeModal>
  );
};

export default DisconnectWalletModal;
