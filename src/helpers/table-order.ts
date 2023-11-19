import BigNumber from 'bignumber.js';
import { DECIMAL_COIN, ORDER_STATUS } from 'src/constants/exchange';
import { isStableCoin } from '.';
import { formatRoundFloorDisplay, nFormatter } from './formatNumber';

export const renderOrderStatus = (status: number) => {
  switch (status) {
    case ORDER_STATUS.Canceled:
      return 'Canceled';
    case ORDER_STATUS.Filling:
      return 'Partially';
    case ORDER_STATUS.Fulfill:
      return 'Filled';
    case ORDER_STATUS.PartiallyFilled:
      return 'Partially';
    default:
      break;
  }
};

export const renderOrderTotal = (item: {
  total: string | number;
  price: string | number;
  amount: string | number;
  average: string | number;
  quote_name: string;
  status: number;
}) => {
  let decimal = isStableCoin(item.quote_name) ? DECIMAL_COIN.STABLE : DECIMAL_COIN.FNFT;
  let total: any = 0;
  if (item.status !== ORDER_STATUS.Canceled) {
    if (item && item.total) {
      total = item.total;
    } else if (item && item.average) {
      total = new BigNumber(item.amount).multipliedBy(item.average).toString();
    } else {
      total = new BigNumber(item.price).multipliedBy(item.amount).toString();
    }
  }
  return total < 10000
    ? formatRoundFloorDisplay(total, decimal)
    : nFormatter(total, 2, BigNumber.ROUND_DOWN);
};

export const renderOrderAmount = (item: {
  amount: string | number;
  quote_name: string;
  status: number;
}) => {
  let decimal = isStableCoin(item.quote_name) ? DECIMAL_COIN.STABLE : DECIMAL_COIN.FNFT;
  let amountValue: any = 0;
  if (item.status !== ORDER_STATUS.Canceled) {
    amountValue = item.amount;
  }
  return amountValue < 10000
    ? formatRoundFloorDisplay(amountValue, decimal)
    : nFormatter(amountValue.toString(), 2, BigNumber.ROUND_DOWN);
};

export const renderOrderPrice = (item: { price: string | number; quote_name: string }) => {
  let decimal = isStableCoin(item.quote_name) ? DECIMAL_COIN.STABLE : DECIMAL_COIN.FNFT;

  return item.price < 10000
    ? formatRoundFloorDisplay(item.price, decimal)
    : nFormatter(item.price.toString(), 2, BigNumber.ROUND_DOWN);
};

export const renderOrderFilled = (item: any) => {
  let filled: number = 0;
  if (item) {
    filled = new BigNumber(item.filled_amount).div(item?.amount).multipliedBy(100).toNumber();
  }
  return formatRoundFloorDisplay(filled, 2);
};

export const renderTotalTradeHistory = (item: any) => {
  let decimal = isStableCoin(item.quote_name) ? DECIMAL_COIN.STABLE : DECIMAL_COIN.FNFT;

  let total: any = 0;
  if (item && item.filled_amount && item.price) {
    total = new BigNumber(item.price).multipliedBy(item.filled_amount).toString();
  }
  return total < 10000
    ? formatRoundFloorDisplay(total, decimal)
    : nFormatter(total, 2, BigNumber.ROUND_DOWN);
};

export const generateExecuted = (item: any) => {
  let total: BigNumber = new BigNumber(0);
  let executed = 0;
  if (item && item.filled_amount && item.price) {
    total = new BigNumber(item.price).multipliedBy(item.filled_amount);
    executed = total.multipliedBy(item.price).toNumber();
  }
  return formatRoundFloorDisplay(executed, 2);
};

export const renderTakerFee = (item: any) => {
  let takerFee: any = '';
  let decimal = isStableCoin(item.quote_name) ? DECIMAL_COIN.STABLE : DECIMAL_COIN.FNFT;
  if (item && item.side === 'buy') {
    takerFee = item.buy_fee;
  } else {
    takerFee = item.sell_fee;
  }

  return !isStableCoin(item.quote_name) && !isStableCoin(item.base_name)
    ? '-'
    : formatRoundFloorDisplay(takerFee, decimal);
};
