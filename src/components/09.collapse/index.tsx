import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import { ArrowUpIcon } from 'src/assets/icons';
import './collapse-styles.scss';

interface IVoteeCollapse extends CollapseProps {
  children: React.ReactNode;
  header: React.ReactNode;
  defaultCollapsible?: boolean;
  headerExtraContent?: React.ReactNode;
}

const VoteeCollapse: React.FC<IVoteeCollapse> = ({
  children,
  className,
  header,
  headerExtraContent,
  defaultCollapsible = false,
  expandIcon,
  ...props
}) => {
  return (
    <Collapse
      className={`votee-collapse ${className ? className : ''}`}
      defaultActiveKey={[defaultCollapsible ? '2' : '1']}
      items={[
        {
          key: '1',
          label: (
            <div className="header-wrapper">
              <div> {header}</div>
              <div>{headerExtraContent}</div>
            </div>
          ),
          children,
        },
      ]}
      expandIconPosition="end"
      expandIcon={
        expandIcon
          ? expandIcon
          : ({ isActive }) => (
              <ArrowUpIcon
                style={{
                  transform: isActive ? 'rotate(0)' : 'rotate(180deg)',
                  width: 18,
                  height: 18,
                }}
              />
            )
      }
      {...props}
    />
  );
};

export default VoteeCollapse;
