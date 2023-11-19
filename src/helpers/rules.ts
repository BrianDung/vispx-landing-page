import { Rule } from 'antd/es/form';
import BigNumber from 'bignumber.js';
import { convertRoundFloor } from './formatNumber';

const amountRules: (tokenInfo?: any, balanceCheckDisabled?: boolean) => Rule[] = (
  tokenInfo,
  balanceCheckDisabled,
) => [
  {
    validator: (_, value) => {
      if (!value) {
        return Promise.reject('This is a compulsory field');
      }

      const cleanedValue = String(value).replace(/[^0-9.]/g, '');

      if (tokenInfo && !balanceCheckDisabled) {
        if (Number(cleanedValue) > tokenInfo.balance) {
          return Promise.reject(
            `You don't have enough ${tokenInfo.name}, please top up your balance`,
          );
        }
      }

      if (cleanedValue === '0') {
        return Promise.reject('You must choose a positive amount');
      }

      return Promise.resolve();
    },
  },
];

const durationRules: (durationPassed?: string) => Rule[] = (durationPassed) => [
  {
    validator: (_, value) => {
      if (!value) {
        return Promise.reject('This is a compulsory field');
      }

      const convertedValue = Number(String(value).replace(/[^0-9.]/g, ''));
      if (convertedValue > 371) {
        return Promise.reject('Loan period too long. Max 371 days');
      } else if (convertedValue < 1) {
        return Promise.reject('Loan period too short. Min 1 day');
      } else if (durationPassed && convertedValue <= Number(durationPassed)) {
        return Promise.reject('Loan end date is in the past');
      }

      return Promise.resolve();
    },
  },
];

const expirationRules: () => Rule[] = () => [
  {
    validator: (_, value) => {
      if (!value) {
        return Promise.reject('This is a compulsory field');
      }

      const convertedValue = Number(String(value).replace(/[^0-9.]/g, ''));
      if (convertedValue > 30) {
        return Promise.reject('Expiration period too long. Max 30 days');
      } else if (convertedValue < 1) {
        return Promise.reject('Expiration period too short. Min 1 day');
      }

      return Promise.resolve();
    },
  },
];

const aprRules: (data?: { amount: string }) => Rule[] = (data) => [
  ({ getFieldValue, setFields }) => ({
    validator: (_, value) => {
      if (!value) {
        return Promise.reject('This is a compulsory field');
      } else {
        setFields([
          {
            name: 'repayment',
            errors: [],
          },
        ]);
      }

      const duration = getFieldValue('duration');
      const amountCheck = data?.amount || getFieldValue('amount');
      const cleanedValue = String(value).replace(/[^0-9.]/g, '');

      if (cleanedValue && (!duration || duration === '0' || !amountCheck || amountCheck === '0')) {
        return Promise.reject(
          'You must choose a loan amount and duration to specify the repayment',
        );
      } else if (cleanedValue === '0') {
        return Promise.reject('You must choose repayment more than principal amount');
      } else if (Number(cleanedValue) > 300) {
        return Promise.reject('You must choose APR less than 300%');
      }
      return Promise.resolve();
    },
  }),
];

const repaymentRules: (data?: { amount: string }) => Rule[] = (data) => [
  ({ getFieldValue, setFields }) => ({
    validator: (_, value) => {
      if (!value) {
        return Promise.reject('This is a compulsory field');
      }

      const duration = getFieldValue('duration');
      const amountCheck = data?.amount || getFieldValue('amount');
      const cleanedValue = String(value).replace(/[^0-9.]/g, '');
      const apr = getFieldValue('apr');

      if (Number(apr) > 300) {
        setFields([
          {
            name: 'apr',
            errors: [`You must choose APR less than 300%`],
          },
        ]);
      } else {
        setFields([
          {
            name: 'apr',
            errors: [],
          },
        ]);
      }

      if (cleanedValue && (!duration || !amountCheck || amountCheck === '0')) {
        return Promise.reject(
          'You must choose a loan amount and duration to specify the repayment',
        );
      } else if (cleanedValue.length !== 0 && Number(cleanedValue) < Number(amountCheck)) {
        return Promise.reject('You must choose repayment more than principal amount');
      }

      return Promise.resolve();
    },
  }),
];

const handleFieldsChangeCommon = (
  changedFields: any,
  allFields: any[],
  form: any,
  data?: {
    amount: string;
  },
  isActive = true,
) => {
  if (!isActive) {
    return;
  }

  const currencyFields = allFields.find((field) => field?.name?.[0] === 'currency');
  const amountFields = allFields.find((field) => field?.name?.[0] === 'amount');
  const durationFields = allFields.find((field) => field?.name?.[0] === 'duration');
  const repaymentFields = allFields.find((field) => field?.name?.[0] === 'repayment');
  const aprFields = allFields.find((field) => field?.name?.[0] === 'apr');
  const expirationFields = allFields.find((field) => field?.name?.[0] === 'expiration');

  console.log({
    currencyFields,
    amountFields,
    durationFields,
    repaymentFields,
    aprFields,
    expirationFields,
    changedFields,
    allFields,
  });

  const changeField = changedFields[0];
  const changeFieldName = changeField?.name?.[0];
  const changeFieldValue = changeField?.value || 0;
  const amountFieldValue = data?.amount || amountFields?.value;
  const durationFieldValue = durationFields?.value;
  const aprFieldValue = aprFields?.value ? BigNumber(aprFields?.value).div(100).toString() : '';

  switch (changeFieldName) {
    case 'repayment': {
      if (!changeFieldValue || BigNumber(changeFieldValue).eq(0)) {
        form.setFieldValue('apr', '');
        return;
      }

      if (
        amountFieldValue &&
        durationFieldValue &&
        !BigNumber(amountFieldValue).eq(0) &&
        !BigNumber(durationFieldValue).eq(0)
      ) {
        const aprCal = BigNumber(
          BigNumber(BigNumber(changeFieldValue).div(amountFieldValue)).minus(1),
        )
          .multipliedBy(365)
          .div(durationFieldValue)
          .multipliedBy(100);

        form.apr = BigNumber(aprCal).div(100).toString();
        form.repayment = '';

        form.setFieldValue('apr', convertRoundFloor(aprCal.toString(), 1));
        form.setFields([
          {
            name: 'apr',
            errors: undefined,
          },
        ]);
      }

      return;
    }

    case 'apr': {
      if (!changeFieldValue || BigNumber(changeFieldValue).eq(0)) {
        form.setFieldValue('repayment', '');
        return;
      }

      if (
        amountFieldValue &&
        durationFieldValue &&
        !BigNumber(amountFieldValue).eq(0) &&
        !BigNumber(durationFieldValue).eq(0)
      ) {
        const changeFieldValueConverted = BigNumber(changeFieldValue).div(100);

        const prepaymentCal = BigNumber(amountFieldValue).multipliedBy(
          BigNumber(1).plus(
            BigNumber(BigNumber(changeFieldValueConverted).multipliedBy(durationFieldValue)).div(
              365,
            ),
          ),
        );

        form.repayment = prepaymentCal.toString();
        form.apr = '';

        form.setFieldValue('repayment', convertRoundFloor(prepaymentCal.toString()));
        form.setFields([
          {
            name: 'repayment',
            errors: undefined,
          },
        ]);
      }

      return;
    }

    case 'amount': {
      if (!changeFieldValue || BigNumber(changeFieldValue).eq(0)) {
        form.setFieldValue('repayment', '');
        return;
      }

      if (
        aprFieldValue &&
        durationFieldValue &&
        !BigNumber(aprFieldValue).eq(0) &&
        !BigNumber(durationFieldValue).eq(0)
      ) {
        const prepaymentCal = BigNumber(changeFieldValue).multipliedBy(
          BigNumber(1).plus(
            BigNumber(BigNumber(aprFieldValue).multipliedBy(durationFieldValue)).div(365),
          ),
        );
        form.repayment = prepaymentCal.toString();
        form.apr = '';

        form.setFieldValue('repayment', convertRoundFloor(prepaymentCal.toString()));
        form.setFields([
          {
            name: 'repayment',
            errors: undefined,
          },
        ]);
      }

      return;
    }

    case 'duration': {
      if (!changeFieldValue || BigNumber(changeFieldValue).eq(0)) {
        form.setFieldValue('repayment', '');
        return;
      }

      if (
        aprFieldValue &&
        amountFieldValue &&
        !BigNumber(aprFieldValue).eq(0) &&
        !BigNumber(amountFieldValue).eq(0)
      ) {
        const prepaymentCal = BigNumber(amountFieldValue).multipliedBy(
          BigNumber(1).plus(
            BigNumber(BigNumber(aprFieldValue).multipliedBy(changeFieldValue)).div(365),
          ),
        );
        form.repayment = prepaymentCal.toString();
        form.apr = '';

        form.setFieldValue('repayment', convertRoundFloor(prepaymentCal.toString()));
        form.setFields([
          {
            name: 'repayment',
            errors: undefined,
          },
        ]);
      }

      return;
    }

    default: {
      return;
    }
  }
};

export {
  amountRules,
  aprRules,
  durationRules,
  expirationRules,
  handleFieldsChangeCommon,
  repaymentRules,
};
