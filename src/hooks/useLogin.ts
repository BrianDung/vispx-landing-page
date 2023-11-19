import { useTranslation } from 'react-i18next';
import { ConnectorKey } from 'src/web3/connectors';
import { useConnectWallet } from 'src/web3/hooks';

export const useLogin = () => {
  // const [login] = useLoginMutation();
  const { connectWalletAndSignMessage } = useConnectWallet();
  // const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const resetStore = (accessToken: string, accountSelected: string) => {
    // dispatch(setAccessToken(accessToken));
    // dispatch(setCurrentAccount(accountSelected as string));
  };

  const clearWalletConnect = () => {
    // walletConnect.resetState();
    // walletConnect.deactivate();
    // localStorage.clear();
    // dispatch(clearWallet());
    // dispatch(clearAccessToken());
    // dispatch(clearCurrentAccount());
  };

  const userLogin = async (connectorKey: ConnectorKey) => {
    // try {
    //   dispatch(setIsLoading(true));
    //   const { signature, account } = await connectWalletAndSignMessage(connectorKey);

    //   const res = await login({ address: account, signature }).unwrap();
    //   const accessToken = res?.accessToken;
    //   if (accessToken) {
    //     resetStore(accessToken, account);
    //     dispatch(setIsAuth(true));
    //     handleReconnect();
    //   } else {
    //     throw new Error();
    //   }
    // } catch (error: any) {
    //   if (connectorKey === ConnectorKey.walletConnect) {
    //     clearWalletConnect();
    //   }
    //   if (error?.code === AxiosError.ERR_NETWORK) {
    //     voteeToast.error(`${t(MESSAGES.MC28)}`);
    //     return;
    //   }

    //   let baseError = {
    //     type: 'user_reject',
    //     message: error?.message,
    //     description: error,
    //   } as WEB3_ERROR;
    //   throw baseError;
    // }
    // dispatch(setIsLoading(false));
  };

  return { userLogin, clearWalletConnect };
};
