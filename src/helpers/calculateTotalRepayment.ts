export const calculateTotalRepayment = ({
  loanAmount,
  apr,
  duration,
}: {
  loanAmount: number;
  apr: number;
  duration: number;
}) => {
  const value = String(loanAmount * (1 + (apr * duration) / 365));
  if (value.includes('-')) {
    return '';
  }
  return value;
};
