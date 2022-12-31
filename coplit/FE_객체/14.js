function getElementOfArrayProperty(obj, key, index) {
  let arrProperty = obj[key];
  return Array.isArray(arrProperty) ? arrProperty[index] : undefined;
}
