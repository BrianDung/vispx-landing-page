import { Button } from 'antd';
import '../styles/button.scss';
import { Trailer } from 'src/assets/icons';
import { ButtonProps } from 'antd/lib/button';
import React from 'react';
interface ButtonLinearProps extends ButtonProps {
  children?: any;
}
export const ButtonLinear: React.FC<ButtonLinearProps> = (props: ButtonLinearProps) => {
  const { children } = props;
  return (
    <div className="button-linear">
      <Button {...props}>
        <div className="flex">
          <img src={Trailer} alt="icon" style={{ marginRight: 12 }} />
          {children}
        </div>
      </Button>
    </div>
  );
};
