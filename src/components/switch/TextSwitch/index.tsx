import './styles.scss';

interface Props {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  textLeft: string;
  textRight: string;
}

const ImageSwitch = ({ checked, onChange, textLeft: TextLeft, textRight: TextRight }: Props) => {
  return (
    <div className="image-switch">
      <div onClick={() => onChange && onChange(false)} className="image-switch__item">
        <p>{TextLeft}</p>
      </div>
      <div onClick={() => onChange && onChange(true)} className="image-switch__item">
        <p>{TextRight}</p>
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
