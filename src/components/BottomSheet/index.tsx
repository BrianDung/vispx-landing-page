import { Drawer, DrawerProps } from 'antd';
import { CloseIcon } from 'src/assets/icons';
import { useEffect } from 'react';
import './styles.scss';
interface Props extends DrawerProps {}

const BottomSheet = ({ children, title, ...restProps }: Props) => {
  // Handle block scroll body  witch mobile devices then open the bottom sheet
  useEffect(() => {
    if (!!restProps?.open) {
      const el: any = document.getElementsByTagName('body')[0];
      el.style.overflow = 'hidden';
    }
    return () => {
      const el: any = document.getElementsByTagName('body')[0];
      el.style.overflow = 'auto';
    };
  }, [restProps]);

  return (
    <Drawer
      {...restProps}
      placement={'bottom'}
      className="bottom-sheet"
      closeIcon={<CloseIcon />}
      title={<span className="title">{title}</span>}
    >
      {children}
    </Drawer>
  );
};

export default BottomSheet;
