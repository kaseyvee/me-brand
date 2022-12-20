import './TemplateList.scss';
import templates from '../database';
import TemplateListItem from './TemplateListItem';

function TemplateList() {

  const templateList = templates.map(template => {
    return (
        <TemplateListItem
          key={template.id}
          image={template.image}
          name={template.name}
        />
    )
  })

  return (
    <div className="TemplateList">
      <h2>templates</h2>
      <div className="template-list-container">
        {templateList}
      </div>
    </div>
  );
}

export default TemplateList;
