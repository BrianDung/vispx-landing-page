import './styles.scss';
import TableProjectComponent from './components/TableProject';
import { useFetch } from 'src/hooks/useFetch';
import { get } from 'lodash';

const ProjectMatrix: React.FC = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_ENDPOINT}/vispx-matrix-list`);
  return (
    <div className="project-matrix">
      <div className="layout">
        <div className="header">
          <div className="label">Project matrix</div>
        </div>
        {!!data && <TableProjectComponent dataSources={get(data, 'data.data', [])} />}
      </div>
    </div>
  );
};

export default ProjectMatrix;
