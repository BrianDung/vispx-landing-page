import { TabsProps } from 'antd';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
import CustomTabs from 'src/components/tabs';
import { useFetch } from 'src/hooks/useFetch';
import TableProjectComponent from './components/TableProject';
import './styles.scss';
import TableYieldboxInjection from './components/TableYieldboxInjection';

const ProjectMatrix: React.FC = () => {
  const { data } = useFetch<any>(`${process.env.REACT_APP_API_ENDPOINT}/vispx-matrix-list`);

  const [isNext, setIsNext] = useState(false);
  const [isPrevious, setIsPrevious] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Number(Math.ceil(data?.data?.total / 4) || 1);

  useEffect(() => {
    if (currentPage < maxPage) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
    if (currentPage > 1) {
      setIsPrevious(true);
    } else {
      setIsPrevious(false);
    }
  }, [currentPage, maxPage]);

  const onNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const dataShow = get(data, 'data.data', []);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Project matrix',
      children: <TableProjectComponent dataSources={dataShow} />,
    },
    {
      key: '2',
      label: 'Yieldbox Injection',
      children: <TableYieldboxInjection dataSources={dataShow} />,
    },
  ];

  return (
    <div className="project-matrix">
      <div className="layout">
        {/* <div className="header flex justify-center align-center">
          <div className="label center">Project matrix</div>
          <div className="paging">
            <div className={`button ${isPrevious ? '' : 'disabled'}`} onClick={onPreviousPage}>
              <ArrowPrevious color={isPrevious ? '#fff' : '#64646c'} />
            </div>
            <div className="page-size">
              <span className="current-page">{currentPage}</span>/
              <span className="max-page">{maxPage}</span>
            </div>
            <div className={`button ${isNext ? '' : 'disabled'}`} onClick={onNextPage}>
              <ArrowNext color={isNext ? '#fff' : '#64646c'} />
            </div>
          </div>
        </div> */}
        {!!data && <CustomTabs type="card" tabs={items} />}
      </div>
    </div>
  );
};

export default ProjectMatrix;
