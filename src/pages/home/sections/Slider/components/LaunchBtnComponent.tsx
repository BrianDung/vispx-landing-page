import ButtonContained from 'src/components/02.buttons/ButtonContained';
import '../styles.scss';

interface LaunchBtnComponentProps {
  isStatic: boolean;
  title?: string;
  route?: () => void;
}
const LaunchBtnComponent = ({ isStatic, title = 'Launch app', route }: LaunchBtnComponentProps) => {
  const openXpad = () => {
    window.location.replace('/xpad');
  };

  return (
    <ButtonContained
      buttonType="btn-launch-pad"
      mode="medium"
      className={`${isStatic ? 'is-static icon-fixed' : ''}  button-lunch-pad`}
      onClick={route ?? openXpad}
    >
      {title}
    </ButtonContained>
  );
};

export default LaunchBtnComponent;
