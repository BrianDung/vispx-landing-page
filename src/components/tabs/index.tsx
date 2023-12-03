import { Tabs, TabsProps } from 'antd';
import useWindowSize from 'src/hooks/useWindowSize';
import './styles.scss';
import { TabsType } from 'antd/es/tabs';

interface Props extends TabsProps {
  tabs: TabsProps['items'];
  type?: TabsType;
  onChange?: (activeKey: string) => void;
  activeKey?: string;
}

const CustomTabs = ({ tabs, type = 'line', onChange, activeKey, centered }: Props) => {
  const { isTablet, isMobile } = useWindowSize();
  return (
    <div className="custom-tab">
      <Tabs
        type={type}
        centered={centered || (isTablet || isMobile ? false : true)}
        defaultActiveKey="private-offer"
        activeKey={activeKey}
        onChange={onChange}
        items={tabs}
      />
    </div>
  );
};

export default CustomTabs;
