export const setMacros = (html, data) => {
  let result = html;
  result = result.replaceAll('{% css-hash %}', data.cssTimeStamp);
  result = result.replaceAll('{% js-hash %}', data.jsTimeStamp);
  result = result.replaceAll('{% website-name %}', data.mainConfig.website.name);

  return result;
};