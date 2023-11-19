export const PATHS = {
  default: '/',
  lend: '/lend',
  borrow: '/borrow',
  bundle: ({ bundleId = ':bundleId' }) => `/bundle/${bundleId}`,
  pool: '/pool',
  stake: '/stake',
  forum: '/forum',
  notification: '/notification',
  notFound: '/404',
  assets: ({ collectionAddress = ':collectionAddress', tokenId = ':tokenId' }) =>
    `/assets/${collectionAddress}/${tokenId}`,
  collection: ({ collectionAddress = ':collectionAddress' }) => `/collection/${collectionAddress}`,
  account: ({ accountAddress = ':accountAddress' }) => `/account/${accountAddress}`,
  setting: '/setting',
  yield: '/yield',
};
