
export const DEFAULT_MODAL_WIDTH = 448; //px

export const SECONDS_IN_MINUTE = 60;
export const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
export const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;
export const SECONDS_IN_MONTH = 30 * SECONDS_IN_DAY;
export const SECONDS_IN_YEAR = 365 * SECONDS_IN_DAY;
export const DAYS_IN_YEAR = 365;
export const DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm';
export const DATE_FORMAT = 'DD/MM/YYYY';
export const debouncingTime = 500;
export const durationMaxInput = 371;
export const aprMaxInput = 300;
export const amountInputMaximum = 99999999;
export const floorRatioInputMaximum = 100;
export const maxSavedFilterNameLength = 40;
export const intervalTime = 10000;

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 5;

export const DurationOptions = [
  // { value: '0.005', label: '0.005 day' },
  // { value: '0.02', label: '0.02 day' },
  // { value: '0.04', label: '0.04 day' },
  // { value: '0.08', label: '0.08 day' },
  { value: '7', label: '7 days' },
  { value: '14', label: '14 days' },
  { value: '30', label: '30 days' },
  { value: '60', label: '60 days' },
  { value: '90', label: '90 days' },
];

export const ExpirationOptions = [
  { value: '7', label: '7 days' },
  { value: '14', label: '14 days' },
  { value: '30', label: '30 days' },
];

export enum FormerLoanStatus {
  REPAID = 'REPAID',
  FORECLOSED = 'FORECLOSED',
}

export const formerOfferSentText = {
  [FormerLoanStatus.REPAID]: 'Repaid',
  [FormerLoanStatus.FORECLOSED]: 'Foreclosed',
};

export const formerOfferSentClass = {
  [FormerLoanStatus.REPAID]: 'state-status',
  [FormerLoanStatus.FORECLOSED]: 'person-name',
};

export const ValueStatus = {
  UNKNOWN: '--',
};

export const TYPE_FILE = {
  IMAGE: 'IMAGE',
  GIF: 'GIF',
  VIDEO: 'VIDEO',
  MUSIC: 'MUSIC',
  MODEL: 'MODEL',
};

export const DEFAULT_DURATION_OPTIONS_STAKE = [
  {
    value: '90',
    label: '3 months',
  },
  {
    value: '180',
    label: '6 months',
  },
  {
    value: '365',
    label: '1 year',
  },
  {
    value: '730',
    label: '2 years',
  },
];


export const LANGUAGE_CODE: any = {
  ENGLISH: 'en', // English
  CHINESE: 'zh', // Chinese
  JAPANESE: 'ja', // Japanese
  KOREAN: 'ko', // Korean
  ARABIC: 'ar', // Arabic
  CZECH: 'cs', // Czech
  DANISH: 'da_DK', // Danish
  DUTCH: 'nl_NL', // Dutch
  ESTONIAN: 'et_EE', // Estonian
  FRENCH: 'fr', // French
  GERMAN: 'de', // German
  GREEK: 'el', // Greek
  HEBREW: 'he_IL', // Hebrew
  INDONESIAN: 'id_ID', // Indonesian
  ITALIAN: 'it', // Italian
  PERSIAN: 'fa', // Persian (Farsi)
  PORTUGUESE: 'pt', // Portuguese
  ROMANIAN: 'ro', // Romanian
  RUSSIAN: 'ru', // Russian
  SLOVAK: 'sk_SK', // Slovak
  SPANISH: 'es', // Spanish
  SWEDISH: 'sv', // Swedish
  THAI: 'th', // Thai
  TURKISH: 'tr', // Turkish
  VIETNAMESE: 'vi', // Vietnamese
};
