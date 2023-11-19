import { NodeNetwork, NodeStatus } from 'src/types/node';

export const NetworkName = {
  [NodeNetwork.BTC]: 'Bitcoin',
  [NodeNetwork.Ethereum]: 'Ethereum',
  [NodeNetwork.BSC]: 'BSC',
  [NodeNetwork.Solana]: 'Solana',
};

// export const NetworkIcons = {
//   [NodeNetwork.BTC]: BTCIcon,
//   [NodeNetwork.Ethereum]: ETHIcon,
//   [NodeNetwork.Solana]: SolanaIcon,
//   [NodeNetwork.BSC]: BSCIcon,
// };

export const NetworkUrls = {
  [NodeNetwork.BTC]: 'https://bitcoin.org',
  [NodeNetwork.Ethereum]: 'https://ethereum.org',
  [NodeNetwork.Solana]: 'https://solana.com',
  [NodeNetwork.BSC]: 'https://www.binance.com',
};

export const NetworkKnowledgeUrls = {
  [NodeNetwork.BTC]: 'https://bitcoin.org/en/getting-started',
  [NodeNetwork.Ethereum]: 'https://ethereum.org/en/learn',
  [NodeNetwork.Solana]: 'https://docs.solana.com',
  [NodeNetwork.BSC]: 'https://bscscan.freshdesk.com/support/solutions',
};

export const NodeStatusLabel: { [key in NodeStatus]: string } = {
  [NodeStatus.PAYMENT_WAITING]: 'Waiting for payment',
  [NodeStatus.DEPLOY_WAITING]: 'Launching',
  [NodeStatus.LAUNCHING]: 'Launching',
  [NodeStatus.HEALTHY]: 'Live',
  [NodeStatus.SYNCING]: 'Syncing',
  [NodeStatus.DELETED]: 'Suspended',
};
