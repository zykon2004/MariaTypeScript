export function getValueLargestKeyLetter(obj: any): any {
  let newObj = Object.keys(obj).sort();
  return obj[newObj[newObj.length - 1]];
}
