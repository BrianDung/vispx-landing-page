import React, { useState, MouseEvent, ReactNode, memo } from 'react';
import { TooltipProps } from 'antd';
import VoteeTooltip from '../Tooltip';

type IProps = {
  children: ReactNode;
} & TooltipProps;

const OverflowTooltip: React.FC<IProps> = ({ className, children, ...props }) => {
  const [tooltipEnabled, setTooltipEnabled] = useState(false);
  const handleShouldShow = ({ currentTarget }: MouseEvent<Element>) => {
    const children = currentTarget.childNodes[0];
    if (children) {
      const childLength = (currentTarget.childNodes[0] as any).scrollWidth;
      if (childLength > currentTarget.scrollWidth) {
        setTooltipEnabled(true);
      }
    }
  };
  const hideTooltip = () => setTooltipEnabled(false);
  return (
    <div className={className} onMouseEnter={handleShouldShow} onMouseLeave={hideTooltip}>
      {tooltipEnabled ? (
        <VoteeTooltip open={tooltipEnabled} {...props}>
          {children}
        </VoteeTooltip>
      ) : (
        children
      )}
    </div>
  );
};

export default memo(OverflowTooltip);
