import './styles.scss';
import { useState } from 'react';
import { useFetch } from 'src/hooks/useFetch';
import { get } from 'lodash';

const OurService: React.FC = () => {
  const [currentPage] = useState(1);
  const { data } = useFetch(
    `${process.env.REACT_APP_API_ENDPOINT}/vispx-our-services?page=${currentPage}&limit=3`,
  );

  const [idShow, setIdShow] = useState(null);

  return (
    <div className="ourservice-section">
      <div className="layout">
        <div className="title-1">Our Services</div>
        <div className="description">
          VispX offers extensive end to end solutions for blockchain gaming projects with its
          tailored services for project needs.
        </div>
        <div className="images">
          {get(data, 'data.data', [1, 2, 3]).map((elm: any) => {
            return (
              <div
                className="project"
                key={elm?.id || elm}
                onMouseEnter={() => setIdShow(elm?.id)}
                onMouseLeave={() => setIdShow(null)}
              >
                <div className="project--name">{elm?.service_name}</div>
                {elm?.service_name && idShow === elm?.id && (
                  <div className="content-show">
                    <div className="title-show">{elm?.service_name}</div>
                    <div className="description-show">{elm?.description}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurService;
