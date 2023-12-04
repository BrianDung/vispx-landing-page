import React from 'react';
import {
  ComingSoonFilter,
  CompletedFilter,
  IconSearchInput,
  InProgressFilter,
} from 'src/assets/icons';
import CustomInput from 'src/components/inputs';
import CustomSelect from 'src/components/select';
import useWindowSize from 'src/hooks/useWindowSize';
import '../styles/filter.scss';

export enum SLIDER_PROJECT_STATUS {
  UPCOMING = 'Upcoming',
  INPROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

const FilterItem = ({ item, active, onClick }: any) => {
  return (
    <div className={`filter-item ${active ? 'active-filter' : ''}`} onClick={onClick}>
      {item.icon} <span className="label">{item.label}</span>
    </div>
  );
};

interface FilterProjectProps {
  activeFilter: string;
  search: string;
  setActiveFilter: (value: string) => void;
  setSearch: (value: string) => void;
}

const FilterProject = ({
  activeFilter,
  search,
  setActiveFilter,
  setSearch,
}: FilterProjectProps) => {
  const { isMobile, isTablet } = useWindowSize();
  const filters = [
    { icon: '', value: '', label: 'All' },
    {
      icon: <img src={ComingSoonFilter} alt="icon" />,
      value: SLIDER_PROJECT_STATUS.UPCOMING,
      label: 'Coming soon',
    },
    {
      icon: <img src={InProgressFilter} alt="icon" />,
      value: SLIDER_PROJECT_STATUS.INPROGRESS,
      label: 'In Progress',
    },
    {
      icon: <img src={CompletedFilter} alt="icon" />,
      value: SLIDER_PROJECT_STATUS.COMPLETED,
      label: 'Completed',
    },
  ];

  console.log('activeFilter',activeFilter)
  return (
    <div className="filter-project">
      <div className="filter-left">
        {isMobile ? (
          <CustomSelect value={activeFilter} options={filters} onChange={setActiveFilter} />
        ) : (
          <React.Fragment>
            <span>Filter by:</span>
            {filters?.map((item) => (
              <FilterItem
                item={item}
                active={activeFilter === item.value}
                onClick={() => setActiveFilter(item.value)}
              />
            ))}
          </React.Fragment>
        )}
      </div>
      <div className="search-right">
        <CustomInput
          className="input"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          suffix={<img src={IconSearchInput} alt="icon" />}
        />
      </div>
    </div>
  );
};

export default FilterProject;