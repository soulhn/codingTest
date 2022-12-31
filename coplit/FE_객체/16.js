function getLastElementOfProperty(obj, property) {
  return Array.isArray(obj[property]) ? obj[property][obj[property].length - 1] : undefined;
}
