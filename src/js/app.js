/* eslint-disable linebreak-style */
export default function orderByProps(obj, array) {
  const step = [];
  const result = [];

  for (const dir in obj) {
    if (array.includes(dir)) {
      result[array.indexOf(dir)] = { key: dir, value: obj[dir] };
    } else {
      step.push({ key: dir, value: obj[dir] });
    }
  }

  step.sort((a, b) => (a.key > b.key ? 1 : -1));
  step.forEach((el) => result.push(el));

  return result;
}
