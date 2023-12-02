import { Button, ButtonProps } from 'antd';
import React from 'react';
import './styles/index.scss';

interface IButtonContainedProps extends ButtonProps {
  buttonType?: 'type1' | 'type2' | 'btn-launch-pad';
  mode?: 'large' | 'medium' | 'small';
  fullWidth?: boolean
}

const ButtonContained: React.FC<IButtonContainedProps> = ({
  className,
  children,
  buttonType = 'type1',
  mode = 'large',
  fullWidth,
  ...props
}) => {
  return (
    <Button
      className={`contained-default--${buttonType} ${className || ''} btn-${mode} ${fullWidth ? 'w-full' : ''}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonContained;
