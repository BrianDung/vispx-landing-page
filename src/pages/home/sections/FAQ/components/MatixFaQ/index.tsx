import './styles.scss';

const MatrixFaQ = ({ data, active, setActiveFAQ }: any) => {
  return (
    <div className="template-layout-faq">
      {data?.map((item: any, index: number) => (
        <div
          key={index}
          onClick={() => setActiveFAQ(item)}
          className={`faq-item item${index + 1} ${active.id === item.id ? 'faq-active' : ''}`}
        >
          {item.name}
        </div>
      ))}
      {/* <div className="faq-item item2">Xpad</div>
      <div className="faq-item item3">Yield Box</div>
      <div className="faq-item item4">Project Kickstart</div>
      <div className="faq-item item5">Blockchain</div> */}
    </div>
  );
};

export default MatrixFaQ;
