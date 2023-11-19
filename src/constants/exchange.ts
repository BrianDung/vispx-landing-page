export enum OrderSide {
  Buy = 1,
  Sell = 2,
}

export enum OrderType {
  Limit = 1,
  Market = 2,
}

export enum OrderMethod {
  BscOrderBook = 2,
  CombinedOrderBook = 3,
  Pool = 4,
  All = 7,
}

export enum ORDER_STATUS {
  Invalid = -2,
  Pending = 0, // Pending order waiting for lock balance
  Canceled = -1, // Cancel order
  Fillable = 1, // Order waiting for exchange
  Filling = 2, // Order in exchange processing with another order
  Fulfill = 3, // Order is done
  PartiallyFilled = 4,
}

export enum TradingMethod {
  StellarOrderbook = 1,
  BSCOrderbook = 2,
  BSCPool = 4,
  PancakeswapPool = 8,
  CombinedOrderbook = TradingMethod.StellarOrderbook | TradingMethod.BSCOrderbook,
  All = TradingMethod.StellarOrderbook | TradingMethod.BSCOrderbook | TradingMethod.BSCPool,
}

export const PAGE_LIMIT = 10;
export const PAGE_LIMIT_MOBILE = 5;

export const ORDER_TYPE = {
  LIMIT: 1,
  MARKET: 2,
};

export const NULL_BYTES_32 = '0x0000000000000000000000000000000000000000000000000000000000000000';

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export enum MarketOrderBy {
  Amount = 0,
  Total = 1,
}

export const NO_EXPIRE = 999; // year

export const BSC_NETWORK_ID = 2;

export const REGEX_PRICE = /^(?!00)\d{0,16}(\.\d{0,4})?$/;

export enum OrderDurationType {
  GOOD_4_DAY = 1,
  GOOD_TIL_CANCEL = 2,
}

export const MINIMUM_TOTAL = 0.0001;

export const BOOLEAN = {
  TRUE: 1,
  FALSE: 0,
};

export const LOCAL_STORAGE_FAVORITES_KEY: string = 'favorite_pairs';

export enum DecimalPlace {
  price = 8,
  volume = 2,
  percent = 2,
  amount = 4,
  usd = 2,
}

export enum OrderBookLength {
  type1 = 15,
  type2 = 30,
}

export const ZERO_FEE = 0;

export const STABLE_COINS = {
  USD: 'USD',
  BUSD: 'BUSD',
  USDT: 'USDT',
};

export const DECIMAL_COIN = {
  STABLE: 4,
  FNFT: 3,
};

export const IMPORT_TOKEN_METHOD = 'wallet_watchAsset';

export const WARNING_ORDER_BY_PERCENT = 0.1; // 10%
