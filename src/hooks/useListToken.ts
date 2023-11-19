import _ from 'lodash';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
// import { Pair } from 'src/interfaces/pair';

interface Token {
  name: string;
  address: string;
  decimals: number;
}

export const useListToken = () => {
  const listPair: [] = useSelector((state: any) => state.pairs.listPair);

  const listTokenUnique = useMemo(() => {
    if (listPair && (listPair as any[]).length > 0) {
      const listToken = listPair.reduce((resultCallBack: Token[], currentItem: any) => {
        // first resultCallBack = []
        const baseToken: Token = {
          name: currentItem.base_symbol,
          address: currentItem.base_bsc_address,
          decimals: currentItem.base_decimal,
        };
        const quoteToken: Token = {
          name: currentItem.quote_symbol,
          address: currentItem.quote_bsc_address,
          decimals: currentItem.quote_decimal,
        };
        const list = [...resultCallBack, baseToken, quoteToken];
        return list;
      }, []);
      return _.uniqBy(listToken, (item: Token) => item.name);
    }
    return [];
  }, [listPair]);

  return listTokenUnique;
};
