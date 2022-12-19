import './TemplateList.scss';
import TemplateListItem from './TemplateListItem';

function TemplateList() {

  const templates = [
    {
      id: 1,
      image: "https://i.imgur.com/kP7pIbZ.png",
      name: "nameless"
    },
    {
      id: 2,
      image: "https://i.imgur.com/uD1OUIO.png",
      name: "chocky sticks"
    },
    {
      id: 3,
      image: "https://i.imgur.com/DDoFPJw.png",
      name: "soobway"
    }
  ]

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
