import { LaunchIcon } from 'src/assets/icons';
import '../styles.scss';
import { Popover } from 'antd';
import useWindowSize from 'src/hooks/useWindowSize';

const LaunchIconComponent = ({ isStatic }: { isStatic: boolean }) => {
  const { width } = useWindowSize();
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
        style={width > 1440 && isStatic ? { right: (width - 1440) / 2 } : {}}
        alt="launch-icon"
        className={`${isStatic ? 'is-static' : ''} icon-fixed`}
      />
    </Popover>
  );
};

export default LaunchIconComponent;
