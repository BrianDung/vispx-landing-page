export const calculateApr = ({
  loanAmount,
  repayment,
  duration,
}: {
  loanAmount: number;
  repayment: number;
  duration: number;
}) => {
  const value = String(((repayment - loanAmount) * 365) / (loanAmount * duration));
  if (value.includes('-')) {
    return '';
  } else {
    return value;
  }
};
