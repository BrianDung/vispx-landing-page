import './styles.scss';

interface Props {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  iconLeft: React.ElementType | string;
  iconRight: React.ElementType | string;
}

const ImageSwitch = ({ checked, onChange, iconLeft: IconLeft, iconRight: IconRight }: Props) => {
  return (
    <div className="image-switch">
      <div onClick={() => onChange && onChange(false)} className="image-switch__item">
        {typeof IconLeft === 'string' ? <img alt="switch-icon" src={IconLeft} /> : <IconLeft />}
      </div>
      <div onClick={() => onChange && onChange(true)} className="image-switch__item">
        {typeof IconRight === 'string' ? <img alt="switch-icon" src={IconRight} /> : <IconRight />}
      </div>
      <div
        style={{
          transform: `translateX(${checked ? '100' : '0'}%)`,
        }}
        className="image-switch__overlay"
      ></div>
    </div>
  );
};

export default ImageSwitch;
