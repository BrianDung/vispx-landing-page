import { AutoComplete, AutoCompleteProps } from 'antd';
import React from 'react';
import './styles.scss';
import CustomInput, { CustomInputProps } from '../inputs';

export interface IVoteeAutoComplete extends AutoCompleteProps {
  inputProps?: CustomInputProps;
}

const VoteeAutoComplete: React.FC<IVoteeAutoComplete> = ({
  className,
  popupClassName,
  inputProps,
  ...props
}) => {
  return (
    <AutoComplete
      className={`votee-autocomplete ${className || ''}`}
      popupClassName={`votee-popup-autocomplete ${popupClassName || ''}`}
      children={<CustomInput {...inputProps} />}
      {...props}
    />
  );
};

export default VoteeAutoComplete;
