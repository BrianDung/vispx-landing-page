import ButtonContained from 'src/components/02.buttons/ButtonContained';
import '../styles/explore.scss';

interface ExploreButtonProps {
  title?: string;
  route?: any;
  className?: string;
}
const ExploreButton = ({ className, title, route }: ExploreButtonProps) => {
  return (
    <ButtonContained
      buttonType="btn-launch-pad"
      mode="medium"
      className={`button-explore ${className}`}
      onClick={() => window.open(route, '_blank')}
    >
      {title}
    </ButtonContained>
  );
};

export default ExploreButton;
