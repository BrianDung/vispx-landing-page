import { Tabs, TabsProps } from 'antd';
import useWindowSize from 'src/hooks/useWindowSize';
import './styles.scss';

interface Props extends TabsProps {
  tabs: TabsProps['items'];
  onChange?: (activeKey: string) => void;
  activeKey?: string;
}

const CustomTabs = ({ tabs, onChange, activeKey, centered }: Props) => {
  const { isTablet, isMobile } = useWindowSize();
  return (
    <div className="custom-tab">
      <Tabs
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
