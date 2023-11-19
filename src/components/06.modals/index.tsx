import Icon from '@ant-design/icons';
import { Modal, ModalProps } from 'antd';
import React from 'react';
import { CloseIcon } from 'src/assets/icons';
import { DEFAULT_MODAL_WIDTH } from 'src/constants';
import './styles/index.scss';

export interface IVoteeModalProps extends ModalProps {}

const VoteeModal: React.FC<ModalProps> = ({
  children,
  footer,
  width,
  className,
  ...props
}: ModalProps) => {
  return (
    <Modal
      closeIcon={<Icon className="close-modal-icon" component={CloseIcon} />}
      width={width ? width : DEFAULT_MODAL_WIDTH}
      footer={footer ? footer : null}
      destroyOnClose={true}
      className={`votee-modal ${className ? className : ''}`}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default VoteeModal;
