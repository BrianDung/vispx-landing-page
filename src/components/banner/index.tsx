import { Image } from 'antd';
import './styles.scss';

type BannerProps = {
  title: string;
  description: string;
};

export default function Banner({ title, description }: BannerProps) {
  return (
    <div className="banner">
      <Image width={'100%'} height={160} preview={false} src="/images/background.png" />
      <div className="banner-content">
        <b className="banner-title">{title}</b>
        <b className="banner-description">{description}</b>
      </div>
    </div>
  );
}
