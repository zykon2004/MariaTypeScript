function filterByKeyValuePair(
  arr: Array<any>,
  myKey: string,
  myValue: any
): Array<string> {
  let valArr = arr.filter((_obj) => {
    return _obj[myKey] === myValue;
  });
  return valArr;
}

export function getSearchQueryResultByKey(
  arr: Array<any>,
  searchKey: string,
  searchValue: any,
  returnKey: any
): Array<any> {
  return filterByKeyValuePair(arr, searchKey, searchValue).map((_obj) => {
    return _obj[returnKey];
  });
}
