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

export { verifyValue, formatValue, formatDuration, formatDate };
