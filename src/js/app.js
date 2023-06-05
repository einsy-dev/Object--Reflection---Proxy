export default function orderByProps(obj, array) {
  const result = [];

  for (const variable in obj) {
    if (variable in obj) {
      result.push({ key: variable, value: obj[variable] });
    }
  }
  result.sort((a, b) => (a.key > b.key ? 1 : -1));
  result.sort((a) => (array.includes(a.key) ? -1 : 1));
  return result;
}
