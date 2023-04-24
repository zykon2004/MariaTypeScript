import { removeExtraSpacesBeginningAndEnd } from "./9";
import {
  checkMultipleConditionsArray,
  checkMultipleConditionsRegex,
} from "./10";

import { arr, findValueInObjectArray } from "./11";

// Exercise 9
const newStr = removeExtraSpacesBeginningAndEnd(
  "     Apples are round and Apples are Juicy    "
);
console.log("****" + newStr + "****");

// Exercise 10
console.log(
  checkMultipleConditionsArray("AaMaria1!")
    ? "Maria checked multiple conditions with an array of conditions"
    : "Maria is still pretty awesome. Everyone makes mistakes!"
);
console.log(
  checkMultipleConditionsRegex("AaMaria1!")
    ? "Maria checked multiple conditions with Regex"
    : "Maria is still pretty awesome. Everyone makes mistakes!"
);
console.log(
  checkMultipleConditionsRegex("MMMMMMM!1")
    ? "Maria is still pretty awesome. Everyone makes mistakes!"
    : "This condition should not pass"
);
// Exercise 11
let name = "Marcus"
console.log(
  findValueInObjectArray(arr, name) ? name + " in arr" : name + " not in arr"
);
name = "Maria"
console.log(
  findValueInObjectArray(arr, name) ? name + " in arr" : name + " not in arr"
);
