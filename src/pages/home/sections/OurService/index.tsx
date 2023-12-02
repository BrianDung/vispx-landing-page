/* eslint-disable react-hooks/exhaustive-deps */
import './styles.scss';
import { useEffect, useState } from 'react';
import { useFetch } from 'src/hooks/useFetch';
import { get } from 'lodash';
import { ArrowNext, ArrowPrevious } from 'src/assets/icons/landing';
import useWindowSize from 'src/hooks/useWindowSize';

const itemsPlaceholder = [1, 2, 3];
const itemsPlaceholderMobile = [1];
const DATA_MOBILE = 1;
const DATA_PC = 3;

const OurService: React.FC = () => {
  const { isMobile } = useWindowSize();

  const numberChange = isMobile ? DATA_MOBILE : DATA_PC;

  const { data } = useFetch<any>(
    `${process.env.REACT_APP_API_ENDPOINT}/vispx-our-services?page=1&limit=50`,
  );

  console.log({data : get(data, 'data.data[0]', itemsPlaceholderMobile) , isMobile})

  const [isNext, setIsNext] = useState(false);
  const [isPrevious, setIsPrevious] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Number(Math.ceil(data?.data?.total / numberChange) || 0);
  const [dataShow, setDataShow] = useState(isMobile ? itemsPlaceholderMobile : itemsPlaceholder);

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

  const [idShow, setIdShow] = useState(null);

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

  useEffect(() => {
    let index = currentPage -1;
    setDataShow(
      isMobile
        ? [get(data, `data.data[${index}]`, itemsPlaceholderMobile)]
        : get(data, 'data.data', itemsPlaceholder).slice(
            (currentPage - 1) * numberChange,
            currentPage * numberChange,
          ),
    );
  }, [currentPage, data]);

  return (
    <div className="ourservice-section">
      <div className="layout">
        <div className="title-1">Our Services</div>
        <div className="description">
          VispX offers extensive end to end solutions for blockchain projects with its
          tailored services for project needs.
        </div>
        <div className="images">
          {(dataShow?.length < numberChange
            ? [...dataShow, ...itemsPlaceholder].slice(0, numberChange)
            : dataShow
          )?.map((elm: any) => {
            return (
              <div
                className="project"
                key={elm?.id || Math.random()}
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
          <div className="handler">
            <div className={`button ${isPrevious ? '' : 'disabled'}`} onClick={onPreviousPage}>
              <ArrowPrevious color={isPrevious ? '#fff' : '#64646c'} />
            </div>
            <div className={`button ${isNext ? '' : 'disabled'}`} onClick={onNextPage}>
              <ArrowNext color={isNext ? '#fff' : '#64646c'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
