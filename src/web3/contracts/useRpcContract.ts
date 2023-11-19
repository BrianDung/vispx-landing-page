import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBalanceToken } from 'src/store/actions/balances';
import Bep20ABI from 'src/web3/abis/bep20.json';
import Web3 from 'web3';

const useRpcContract = (addressToken: string) => {
  const account = useSelector((state: any) => state.currentAccount);
  const web3BscHttp = new Web3(`${process.env.REACT_APP_BSC_RPC_URL}` as string);

  const dispatch = useDispatch();

  const getBalance = async () => {
    if (addressToken && account) {
      const sc = new web3BscHttp.eth.Contract(Bep20ABI as any, addressToken);
      const balanceToken = await sc.methods.balanceOf(account).call();
      const balance = balanceToken.toString();
      dispatch(setBalanceToken(addressToken, balance));
    }
  };

  useEffect(() => {
    getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, addressToken]);
  return getBalance;
};

export default useRpcContract;
