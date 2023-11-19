import './styles.scss';

interface Props {
  option: number;
  onChange?: (option: number) => void;
  options: Array<any>;
}

const CustomSwitch = ({ onChange, option: optionActive, options }: Props) => {
  return (
    <div className="text-switch">
      {options.map((option, index) => (
        <div
          onClick={() => onChange && onChange(index)}
          key={index}
          className={`text-switch__item ${optionActive === index ? 'active' : ''}`}
        >
          <p>{option}</p>
        </div>
      ))}

      <div
        style={{
          width: `${100 / options.length - 0.9}%`,
          transform: `translateX(${optionActive * 100}%)`,
        }}
        className="text-switch__overlay"
      ></div>
    </div>
  );
};

export default CustomSwitch;
