import { LaunchIcon } from 'src/assets/icons';
import '../styles.scss';
import { Popover } from 'antd';
import { useHistory } from 'react-router-dom';

const LaunchIconComponent = ({ isStatic }: { isStatic: boolean }) => {
  const history = useHistory();
  const openXpad = () => {
    window.location.replace('/xpad');
  };
  const content = (
    <span className="text-launch-app pointer" onClick={openXpad}>
      Launch app
    </span>
  );
  return (
    <Popover placement="leftTop" title={null} content={content} overlayClassName="pop-hover-icon">
      <img
        src={LaunchIcon}
        alt="launch-icon"
        className={`${isStatic ? 'is-static' : ''} icon-fixed`}
      />
    </Popover>
  );
};

export default LaunchIconComponent;
