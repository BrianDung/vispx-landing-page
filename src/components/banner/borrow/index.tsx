import { Image } from 'antd';
import './index.scss';

export default function BannerBorrow() {
  return (
    <div className="banner-borrow">
      <Image width={'100%'} height={160} preview={false} src="/images/background.png" />
      <div className="banner-borrow-content">
        <b className="banner-borrow-title">BORROW</b>
        <b className="banner-borrow-description">
          Put your NFT as collateral for Peer to Peer Loan
        </b>
      </div>
    </div>
  );
}
