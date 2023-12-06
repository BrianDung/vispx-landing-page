import '../styles/button-launch-app.scss';

interface LaunchBtnComponentProps {
  isStatic: boolean;
  title?: string;
  route?: any;
  className?: string;
}

const xpad = process.env.REACT_APP_LAUNCH_APP || '';
const LaunchBtnComponent = ({ isStatic, title, route }: LaunchBtnComponentProps) => {
  return (
    <div className={`${isStatic ? 'is-static icon-fixed' : ''} explore-apps flex`}>
      <div className="btn-dark-container">
        <a
          className="btn btn-dark flex middle center"
          href={route ? route : xpad}
          target="_blank"
          rel="noreferrer"
        >
          <span className="flex middle center expand">{title}</span>
        </a>
      </div>
    </div>
  );
};

export default LaunchBtnComponent;
