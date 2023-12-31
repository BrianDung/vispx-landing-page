import { ToastContainer } from 'react-toastify';
import { ToastCloseIcon, ToastInfoIcon } from 'src/assets/icons';
import OutlineRedIcon from 'src/assets/icons/common/outline-close-red-ic.svg';
import OutlineSuccessIcon from 'src/assets/icons/common/success-outline.svg';
import './toast.scss';

const ToastContext = () => {
  return (
    <ToastContainer
      icon={(props) => {
        switch (props.type) {
          case 'info':
            return <img src={ToastInfoIcon} alt="Toast-info-icon" className="toast-icon" />;
          case 'error':
            return (
              <img
                src={OutlineRedIcon}
                alt="Toast-info-icon"
                className="toast-icon toast-error-icon"
              />
            );
          case 'success':
            return (
              <img
                src={OutlineSuccessIcon}
                alt="Toast-info-icon"
                className="toast-icon toast-success-icon"
              />
            );
          case 'warning':
            return (
              <img
                src={OutlineRedIcon}
                alt="Toast-info-icon"
                className="toast-icon toast-warning-icon"
              />
            );
          case 'default':
            return (
              <img
                src={ToastInfoIcon}
                alt="Toast-info-icon"
                className="toast-icon toast-info-icon"
              />
            );
          default:
            return <img src={ToastInfoIcon} alt="Toast-info-icon" className="toast-icon" />;
        }
      }}
      closeButton={() => (
        <img src={ToastCloseIcon} alt="Toast close" className="toast-close-icon" />
      )}
      bodyClassName="body-toast"
      toastClassName={(props) => {
        switch (props?.type) {
          case 'info':
            return 'wrapper-toast';
          case 'error':
            return 'wrapper-toast wrapper-error-toast';
          case 'success':
            return 'wrapper-toast wrapper-success-toast';
          case 'warning':
            return 'wrapper-toast wrapper-warning-toast';
          case 'default':
            return 'wrapper-toast';
          default:
            return 'wrapper-toast';
        }
      }}
      autoClose={3000}
      draggable={false}
      hideProgressBar
      pauseOnHover={false}
      position="top-right"
      limit={5}
    />
  );
};

export default ToastContext;
