import { resourceLimits } from "worker_threads";

export function deleteObjectFromArrayByKeyValuePair(
  arr: Array<any>,
  myKey: any,
  myValue: any
): any {
  let newArr = [...arr];
  let result = newArr.find((_obj) => {
    return _obj[myKey] === myValue;
  });
  if (result) {
    newArr.splice(newArr.indexOf(result), 1);
  } else {
    console.log("key value pair not found");
  }
  return newArr;
}
export function filterArrayByKeyValuePair(
  arr: Array<any>,
  myKey: any,
  myValue: any
): any {
  return arr.filter((_obj) => {
    return _obj[myKey] !== myValue;
  });
}
