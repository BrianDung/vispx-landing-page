import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MetamaskIcon, WalletConnectIcon } from 'src/assets/icons';
import { MESSAGES } from 'src/constants/messages';
import { useLogin } from 'src/hooks/useLogin';
import { WEB3_ERROR } from 'src/types';
import { ConnectorKey } from 'src/web3/connectors';
import FracModal, { IVoteeModalProps } from '.';
import { voteeToast } from '../Toast';
import './styles/connect-wallet-modal.scss';
import { hasStorageJwtToken } from 'src/helpers/storage';

interface IConnectWalletModalProps extends IVoteeModalProps {
  closeModal?: () => void;
  onLoginSuccess?: () => void;
}
interface IConnectBoxProps {
  text: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const ConnectBox: React.FC<IConnectBoxProps> = (props: IConnectBoxProps) => {
  const { icon, isActive, onClick, text } = props;

  return (
    <div className={`box-connect ${isActive ? 'active-connect' : ''}`} onClick={onClick}>
      <div className="group-content">
        <img src={icon} alt="icon" />
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

const ConnectWalletModal: React.FC<IConnectWalletModalProps> = (
  props: IConnectWalletModalProps,
) => {
  const { t } = useTranslation();
  const { userLogin, clearWalletConnect } = useLogin();

  const [isMetamask, setIsMetamask] = useState<boolean>(true);
  const [userLock, setUserLock] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isWelcome, setIsWelcome] = useState<boolean>(false);
  const { provider } = useWeb3React();
  const { open, closeModal, onLoginSuccess } = props;

  // states
  const getAddress = async () => {
    if (!provider) {
      return '';
    }
    try {
      const signer = provider?.getSigner();
      await signer.getAddress();
    } catch (error) {
      console.log('USER LOCK', error);
      setUserLock(true);
    }
  };

  const handleCloseModal = () => {
    if (closeModal) {
      setIsMetamask(true);
      closeModal();
    }
  };

  const handleClick = async (connectorKey: ConnectorKey) => {
    try {
      if (hasStorageJwtToken()) {
        clearWalletConnect();
      }
      if (connectorKey === ConnectorKey.metaMask) {
        setIsLoading(true);
        await userLogin(ConnectorKey.metaMask);
        setUserLock(false);
        onLoginSuccess && onLoginSuccess();
      } else {
        handleCloseModal();
        await userLogin(ConnectorKey.walletConnect);
        setUserLock(false);
      }
      handleCloseModal();
      setIsWelcome(true);
    } catch (error: any) {
      handleError(error, isMetamask ? ConnectorKey.metaMask : ConnectorKey.walletConnect);
    }
    setIsLoading(false);
  };

  // };

  const handleError = (error: WEB3_ERROR, connectorKey: ConnectorKey) => {
    switch (error.type) {
      case 'user_reject':
        voteeToast.error('Failed to connect');
        break;
      case 'un_support_chain':
        voteeToast.error(t(MESSAGES.MC14), t(MESSAGES.MC15));
        break;
      case 'no_eth_provider':
        setIsMetamask(false);
        break;
      default:
        voteeToast.error(MESSAGES.MC3);
    }
  };

  const handleCancel = () => {
    setIsMetamask(true);
    handleCloseModal();
  };

  const isMetaMaskInstalled = () => {
    return Boolean((window as any).ethereum && (window as any).ethereum.isMetaMask);
  };

  useEffect(() => {
    getAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FracModal
        open={open}
        onCancel={handleCancel}
        width={500}
        title="Connect Wallet"
        wrapClassName={`connect-wallet-modal`}
      >
        {(!isMetaMaskInstalled() || !isMetamask || userLock) && (
          <div className="error-message-metamask">{t(MESSAGES.MC12)}</div>
        )}
        {!isLoading && !isWelcome && (
          <div className="type-connect-group">
            <ConnectBox
              icon={MetamaskIcon}
              onClick={() => {
                handleClick(ConnectorKey.metaMask);
              }}
              text="MetaMask"
              isActive={true}
            />
            <ConnectBox
              icon={WalletConnectIcon}
              onClick={() => {
                handleClick(ConnectorKey.walletConnect);
              }}
              text="WalletConnect"
              isActive={true}
            />
          </div>
        )}
        {isLoading && !isWelcome && (
          <div className="type-connect-group">
            <div className="connect-guide">
              <img src={MetamaskIcon} alt="Metamask Icon" className="connect-guide-icon" />
              <span className="connect-guide-title">Opening MetaMask</span>
              <span className="connect-guide-text">
                Please confirm and sign in metamask to proceed
              </span>
            </div>
          </div>
        )}
      </FracModal>
      <FracModal
        open={isWelcome}
        onCancel={() => setIsWelcome(false)}
        width={448}
        wrapClassName={`connect-wallet-modal`}
        className="welcome-modal"
      >
        <div>
          <h1 className="welcome-title">
            🎉 Welcome to <br /> Votee Lending Protocol
          </h1>
          <p className="welcome-content">
            Start borrowing using your NFTs or giving loan to earn interest and Reward
          </p>
        </div>
      </FracModal>
    </>
  );
};

export default ConnectWalletModal;
