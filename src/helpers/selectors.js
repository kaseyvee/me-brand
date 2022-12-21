export function getTemplate(templates, match) {
  return templates.find(template => template.name === match)
}

export function getTemplateAttr(template, attr) {
  return template[attr];
}