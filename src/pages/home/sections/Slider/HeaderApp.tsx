import { LaunchIcon, LogoVispx, Slider1Icon } from 'src/assets/icons';
import './styles.scss';
import {  Popover } from 'antd';

const HeaderApp = () => {
  const content = <span className="text-launch-app">Launch app</span>;
  return (
    <div className="slider-custom">
      <div className="header layout flex justify-between pointer">
        <img src={LogoVispx} alt="vispx-logo" style={{ width: 110, height: 'auto' }} />
        <Popover
          placement="leftTop"
          title={null}
          content={content}
          overlayClassName="pop-hover-icon"
        >
          <img src={LaunchIcon} alt="launch-icon" style={{ width: 28, height: 28 }}/>
        </Popover>
      </div>
    </div>
  );
};

export default HeaderApp;
