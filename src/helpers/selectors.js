export function getTemplate(templates, match) {
  return templates.find(template => template.name === match);
}