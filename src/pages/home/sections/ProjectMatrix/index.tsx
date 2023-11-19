import { Input } from 'antd';
import './styles.scss';
import { SearchOutlined } from '@ant-design/icons';

const ProjectMatrix: React.FC = () => {
  return (
    <div className="project-matrix">
      <div className="layout">
        <div className="header flex justify-between">
          <div className="label">Project matrix</div>
          <div>
            <Input addonBefore={<SearchOutlined />} placeholder="Search for project" className='input-search'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMatrix;
