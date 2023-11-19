import { Checkbox, CheckboxProps } from 'antd';
import React from 'react';
import './checkbox-styles.scss';

interface IVoteeCheckBox extends CheckboxProps {
  label?: React.ReactNode;
}

const VoteeCheckBox: React.FC<IVoteeCheckBox> = ({
  className,
  label,
  onClick,
  children,
  ...props
}) => {
  return (
    <div className={`votee-check-box-wrapper ${className || ''}`}>
      <Checkbox className={`votee-check-box-wrapper__check-box`} {...props}>
        <div className="votee-check-box-wrapper__label">{children}</div>
      </Checkbox>
    </div>
  );
};

export default VoteeCheckBox;
