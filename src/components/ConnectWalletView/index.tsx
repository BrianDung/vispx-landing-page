import React, { useState } from 'react';
import './styles.scss';
import ButtonContained from '../02.buttons/ButtonContained';
import ConnectWalletModal from '../06.modals/ConnectWalletModal';
type Props = {
  bordered?: boolean;
  label?: string;
};

const ConnectWalletView = ({ bordered, label }: Props) => {
  const [isOpenConnectWalletModal, setConnectWalletModal] = useState(false);

  return (
    <div className={`connect-wallet__container ${bordered ? 'connect-wallet--bordered' : ''}`}>
      <span className="connect-wallet__title">Connect your wallet</span>
      <p className="connect-wallet__subtitle">
        {label || 'To view standing offer, please connect your wallet'}
      </p>

      <ButtonContained className="connect-wallet__btn" onClick={() => setConnectWalletModal(true)}>
        Connect Wallet
      </ButtonContained>

      <ConnectWalletModal
        open={isOpenConnectWalletModal}
        onCancel={() => setConnectWalletModal(false)}
        closeModal={() => setConnectWalletModal(false)}
      />
    </div>
  );
};

export default ConnectWalletView;
