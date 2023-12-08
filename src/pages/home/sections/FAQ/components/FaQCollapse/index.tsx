import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import { IconCloseFaQ, IconOpenFaQ } from 'src/assets/icons';
import './styles.scss';
// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// const items: CollapseProps['items'] = [
//   {
//     key: '1',
//     label: 'XBorg Pool',
//     children: (
//       <React.Fragment>
//         <div className="category">
//           <span className="title">Purchase</span>
//           <span className="description">Become a holder of XBorg to participage in XBorg Pool</span>
//         </div>
//         <div className="category">
//           <span className="title">Allocation Round</span>
//           <span className="description">
//             XBorg NFTs are classified in three different categories based on their scarceness as
//             below and they are limited in supply: Common (60%), Rare (30%) and Elite (10%)
//           </span>
//         </div>
//         <div className="category">
//           <span className="title">Point Determination</span>
//           <span className="description">
//             Points are calculated based on the number of XBorg NFTs in users' wallets, NFT
//             attribute, and class. Your Points = Total attributes * total NFTs in your wallet
//           </span>
//         </div>
//       </React.Fragment>
//     ),
//   },
//   {
//     key: '2',
//     label: 'Partner Pool',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '3',
//     label: 'Open Pool',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '4',
//     label: 'Yield Box',
//     children: <p>{text}</p>,
//   },
// ];

const FAQCollapse = ({ data }: any) => {
  const items: CollapseProps['items'] = data.map((item: any, index: number) => ({
    key: index,
    label: item.question,
    children: (
      <React.Fragment>
        <div className="category">
          <span className="description">{item.answer}</span>
        </div>
      </React.Fragment>
    ),
  }));

  return (
    <Collapse
      className="faq-collapse"
      defaultActiveKey={['1']}
      items={items}
      accordion={true}
      expandIcon={(panelProps) => (
        <img src={panelProps.isActive ? IconOpenFaQ : IconCloseFaQ} width={14} alt="icon-network" />
      )}
    />
  );
};

export default FAQCollapse;