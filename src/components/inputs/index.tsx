import { Input, InputProps } from 'antd';
import './styles.scss';

export interface CustomInputProps extends InputProps {
  className?: string;
  widthFull?: boolean;
  allowNegative?: boolean;
}
const CustomInput = ({
  className,
  widthFull,
  allowNegative = true,
  ...restProps
}: CustomInputProps) => {
  return (
    <div className={`input-box ` + className}>
      {allowNegative ? (
        <Input
          className={`input-default ${widthFull ? 'w-full' : ''}`}
          {...restProps}
        />
      ) : (
        <Input
          className={`input-default input-default ${widthFull ? 'w-full' : ''}`}
          pattern="^\d*(\.\d{0,2})?$"
          onInput={(e) => {
            if (!e.currentTarget.validity.valid) {
              e.currentTarget.value = '';
            }
          }}
          {...restProps}
        />
      )}
    </div>
  );
};

export default CustomInput;
