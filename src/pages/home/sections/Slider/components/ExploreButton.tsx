import ButtonContained from 'src/components/02.buttons/ButtonContained';
import '../styles/explore.scss';

interface ExploreButtonProps {
  title?: string;
  route?: any;
  className?: string;
}
const ExploreButton = ({ className, title = 'Launch app', route }: ExploreButtonProps) => {
  return (
    <ButtonContained
      buttonType="btn-launch-pad"
      mode="medium"
      className={`button-explore ${className}`}
      onClick={() => window.location.replace(route)}
    >
      {title}
    </ButtonContained>
  );
};

export default ExploreButton;
