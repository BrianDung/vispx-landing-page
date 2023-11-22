import { LaunchIcon } from 'src/assets/icons';
import '../styles.scss';
import { Popover } from 'antd';
import { useHistory } from 'react-router-dom';

const LaunchIconComponent = () => {
  const history = useHistory();
  const content = (
    <span className="text-launch-app pointer" onClick={() => history.push('/xpad')}>
      Launch app
    </span>
  );
  return (
    <Popover placement="leftTop" title={null} content={content} overlayClassName="pop-hover-icon">
      <img
        src={LaunchIcon}
        alt="launch-icon"
        className='icon-fixed'
      />
    </Popover>
  );
};

export default LaunchIconComponent;
