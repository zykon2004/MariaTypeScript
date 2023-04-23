import {
  checkMultipleConditionsArray,
  checkMultipleConditionsRegex,
} from "./10";
import { removeExtraSpacesBeginningAndEnd } from "./9";

import { arr, findValueInObjectArray } from "./11";

// Exercise 9
const newStr = removeExtraSpacesBeginningAndEnd(
  "     Apples are round and Apples are Juicy    "
);
console.log("****" + newStr + "****");

// Exercise 10
console.log(
  checkMultipleConditionsArray("AaMaria1!")
    ? "Maria is Awesome"
    : "Maria is still pretty awesome. Everyone makes mistakes!"
);
console.log(
  checkMultipleConditionsRegex("AaMaria1!")
    ? "Maria is Awesome and knows Regex"
    : "Maria is still pretty awesome. Everyone makes mistakes!"
);
console.log(
  checkMultipleConditionsRegex("MMMMMMM!1")
    ? "Maria is still pretty awesome. Everyone makes mistakes!"
    : "Maria is Awesome and knows Regex"
);
// Exercise 11
console.log(findValueInObjectArray(arr, "Marcus"));
