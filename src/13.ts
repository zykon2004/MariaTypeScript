import { employees } from "./12";
// const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("cows");
// console.log(count);
// // Expected output: 4
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push("chickens", "cats", "dogs");
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"function f() {

// export let P = typeof employees;
// class Bar {}
// let bar = new Bar();
// let bar2 = new Bar();

// class Foo {}

// let x = new Foo();

// bar.constructor === x.constructor;
function compareTypes(item1: any, item2: any): boolean {
  if (typeof item1 == typeof item2 && typeof item1 != "object") {
    return true;
  }
  let itemarr1 = Object.keys(item1).sort();
  let itemarr2 = Object.keys(item2).sort();
  const conditionArray = [
    item1.constructor === item2.constructor,
    itemarr1.toString() === itemarr2.toString(),
  ];
  return !conditionArray.includes(false);
}

export function addItemOfSameType(arr: Array<any>, item: any): Array<any> {
  let newArr = [...arr]; // copied arr to not mutate it
  if (newArr.length == 0) {
    newArr.push(item);
  } else {
    compareTypes(newArr[0], item)
      ? newArr.push(item)
      : console.log("item is not of same type as arr");
  }
  return newArr;
}
