export default function orderByProps(obj, array) {

    let result = [];

    for (const key in obj) {
        result.push({ key: key, value: obj[key] });
    }

    result.sort((a, b) => a.key > b.key ? 1 : -1);
    result.sort((a) => array.includes(a.key) ? -1 : 1);

    return result;
}
