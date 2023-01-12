function lessThan100(number) {
  if (typeof number !== "number") return;
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  if (Array.isArray(obj[property])) {
    return obj[property].filter((a) => lessThan100(a));
  }
  return [];
}
