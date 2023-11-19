import moment from 'moment';
export const TYPE_DATE_TIME = 'DD-MM-YY HH:mm:ss';

export const getFirstOfDay = (date: Date): number => new Date(date).setHours(0, 0, 0);
export const getEndOfDay = (date: Date): number => new Date(date).setHours(23, 59, 59);

export const getFirstDayOfMonth = (date: Date): number =>
  getFirstOfDay(new Date(date.getFullYear(), date.getMonth(), 1));
export const getLastDayOfMonth = (date: Date): number =>
  getEndOfDay(new Date(date.getFullYear(), date.getMonth() + 1, 0));

export const getFirstDayOfWeek = (date: Date): number =>
  getFirstOfDay(new Date(date.setDate(date.getDate() - date.getDay())));
export const getLastDayOfWeek = (date: Date): number =>
  getEndOfDay(new Date(date.setDate(date.getDate() - date.getDay() + 6)));

export const getFirstDayOfYear = (date: Date): number =>
  getFirstOfDay(new Date(new Date(date).getFullYear(), 0, 1));
export const getLastDayOfYear = (date: Date): number =>
  getEndOfDay(new Date(date.getFullYear(), 11, 31));

export const addTimeJS = (date: Date, step = 1, time: 'year' | 'month' | 'week' | 'day'): Date => {
  switch (time) {
    case 'year':
      return new Date(date.setFullYear(date.getFullYear() + step));

    case 'month':
      return new Date(new Date(date).getFullYear(), date.getMonth() + step, 1);

    case 'week':
      return new Date(date.setDate(date.getDate() + 7 * step));

    case 'day':
      return new Date(date.setDate(date.getDate() + step));

    default:
      return new Date();
  }
};

export const subTimeJS = (date: Date, step = 1, time: 'year' | 'month' | 'week' | 'day'): Date => {
  switch (time) {
    case 'year':
      return new Date(date.setFullYear(date.getFullYear() - step));

    case 'month':
      return new Date(new Date(date).getFullYear(), date.getMonth() - step, 1);

    case 'week':
      return new Date(date.setDate(date.getDate() - 7 * step));

    case 'day':
      return new Date(date.setDate(date.getDate() - step));

    default:
      return new Date();
  }
};

type KeyHideDate = 'year' | 'month' | 'date';
export const renderDate = (dateInput: Date, key?: KeyHideDate): string => {
  const date = `0${new Date(dateInput).getDate()}`.slice(-2);
  const month = `0${new Date(dateInput).getMonth() + 1}`.slice(-2);
  const year = `${new Date(dateInput).getFullYear()}`;
  switch (key) {
    case 'year':
      return `${date}-${month}`;

    default:
      return `${date}-${month}-${year}`;
  }
};

export const renderTime = (date: Date): string => {
  return `${`0${new Date(date).getHours()}`.slice(-2)}:${`0${new Date(date).getMinutes()}`.slice(
    -2,
  )} ${new Date(date).getHours() >= 12 ? ' PM' : ' AM'}`;
};

export const renderDateTime = (dateTime: any) => {
  // Convert dateTime from Moment Object to String "2021-05-28 08:45:59"
  return moment(dateTime).format(TYPE_DATE_TIME);
};

export const LABEL_DEFAULT = '1 Months';
const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;
const SECONDS_IN_MONTH = 30 * SECONDS_IN_DAY;
const SECONDS_IN_YEAR = 365 * SECONDS_IN_DAY;

export const formatUnixTimestamp = (durationInSeconds: number) => {
  let value, unit;

  switch (true) {
    case durationInSeconds < SECONDS_IN_MINUTE:
      value = durationInSeconds;
      unit = 'second';
      break;
    case durationInSeconds < SECONDS_IN_HOUR:
      value = durationInSeconds / SECONDS_IN_MINUTE;
      unit = 'minute';
      break;
    case durationInSeconds < SECONDS_IN_DAY:
      value = durationInSeconds / SECONDS_IN_HOUR;
      unit = 'hour';
      break;
    case durationInSeconds < SECONDS_IN_MONTH:
      value = durationInSeconds / SECONDS_IN_DAY;
      unit = 'day';
      break;
    case durationInSeconds < SECONDS_IN_YEAR:
      value = durationInSeconds / SECONDS_IN_MONTH;
      unit = 'month';
      break;
    default:
      value = durationInSeconds / SECONDS_IN_YEAR;
      unit = 'year';
      break;
  }

  value = Math.round(value * 10) / 10; // round to 1 decimal place if u change round please change 10 -> 100
  unit = value !== 1 ? `${unit}s` : unit; // case > 1 add 's'

  return `${value} ${unit}`;
};
