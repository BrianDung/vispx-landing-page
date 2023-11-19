import '../styles/card.scss';
const Card: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="card">
      <div className="layout">
        <div className="header flex">
          <img src={icon} alt="icon" />
          <div className="title">{title}</div>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
