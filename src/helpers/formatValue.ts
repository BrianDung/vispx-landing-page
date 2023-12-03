import BigNumber from 'bignumber.js';
import { DATE_TIME_FORMAT, SECONDS_IN_DAY, ValueStatus } from 'src/constants';
import { nFormatter } from './formatNumber';
import dayjs from 'dayjs';

const verifyValue = (data?: string | number) => {
  if (!data || data === 'NaN' || data === 'null') return ValueStatus.UNKNOWN;
  return data;
};

const formatValue = (data?: string | number, prefix?: string, noSpace = false) => {
  const checkData = verifyValue(data);
  if (checkData === ValueStatus.UNKNOWN) return checkData;

  if (prefix) {
    if (noSpace) return `${data}${prefix}`;
    return `${data} ${prefix}`;
  }
  return checkData;
};

const formatDuration = (duration: string | number) => {
  const checkData = verifyValue(duration);
  if (checkData === ValueStatus.UNKNOWN) return checkData;

  const convertDuration = BigNumber(duration).div(SECONDS_IN_DAY).toNumber();
  return `${nFormatter(String(convertDuration), 0)} ${convertDuration < 2 ? 'day' : 'days'}`;
};

const formatDate = (date: any, formatTime = DATE_TIME_FORMAT) => {
  const checkData = verifyValue(date);
  if (checkData === ValueStatus.UNKNOWN) return checkData;

  return dayjs(date).format(formatTime);
};

const formatATHROI = (number: string) => {
  if (isNaN(Number(number))) {
    return number;
  } else {
    return `x${new BigNumber(number || 0).toFormat()}`;
  }
};

const formatATHPrice = (number: string) => {
  const allPart = number?.split('_');
  let price = '';
  let post_fix = '';
  let final = `${new BigNumber(price || 0).toFormat()} ${post_fix}`;
  if (allPart?.length > 1) {
    price = allPart[0];
    post_fix = allPart[1];
    final = `${new BigNumber(price || 0).toFormat()} ${post_fix}`;
  } else if (isNaN(Number(number))) {
    return number;
  } else {
    return new BigNumber(number || 0).toFormat();
  }
  return final;
};

export { verifyValue, formatValue, formatDuration, formatDate, formatATHROI, formatATHPrice };
