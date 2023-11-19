import { Grid, Tooltip, TooltipProps } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { TooltipIcon } from 'src/assets/icons';
import './styles.scss';

type IVoteeTooltip = {} & TooltipProps;

const VoteeTooltip: React.FC<IVoteeTooltip> = ({ overlayClassName, ...props }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement | any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (breakpoint.xs)
    return (
      <div ref={ref} onClick={() => setOpen(true)} className="tooltip-wrapper">
        <Tooltip
          open={open}
          overlayClassName={`votee-tooltip ${overlayClassName || ''}`}
          {...props}
        >
          {props.children || <TooltipIcon />}
        </Tooltip>
      </div>
    );
  return (
    <Tooltip overlayClassName={`votee-tooltip ${overlayClassName || ''}`} {...props}>
      {props.children || <TooltipIcon />}
    </Tooltip>
  );
};

export default VoteeTooltip;
