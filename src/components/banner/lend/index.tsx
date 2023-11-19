import { Image } from 'antd';
import './index.scss';

export default function BannerLend() {
  return (
    <div className="banner-lend">
      <Image width={'100%'} height={160} preview={false} src="/images/background.png" />
      <div className="banner-lend-content">
        <b className="banner-lend-title">LEND</b>
        <b className="banner-lend-description">
          Offer loans to other users on their non-fungible tokens.
        </b>
      </div>
    </div>
  );
}
