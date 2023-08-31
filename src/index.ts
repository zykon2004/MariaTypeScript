import { removeExtraSpacesBeginningAndEnd } from "./9";
import {
  checkMultipleConditionsArray,
  checkMultipleConditionsRegex,
} from "./10";

import { arr, findValueInObjectArray } from "./11";
import { getDepartmentById, employees } from "./12";
import { addItemOfSameType } from "./13";
import {
  deleteObjectFromArrayByKeyValuePair,
  filterArrayByKeyValuePair,
} from "./14";
import { getSearchQueryResultByKey } from "./15";
import { getValueLargestKeyLetter} from "./16";

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
let name = "Marcus";
console.log(
  findValueInObjectArray(arr, name) ? name + " in arr" : name + " not in arr"
);
name = "Maria";
console.log(
  findValueInObjectArray(arr, name) ? name + " in arr" : name + " not in arr"
);
// Exercise 12
console.log(getDepartmentById("id", 4));

// Exercise 13
console.log("Exercise 13");
console
  .log
  // addItemOfSameType(employees, { id: 5, name: "Maria", department: "R&D" })
  ();
console.log(
  addItemOfSameType(employees, {
    name: "Robert",
    id: 5,
    department: "R&V",
  })
);
console.log(addItemOfSameType(employees, { name: "Maria", department: "R&D" }));

// Exercise 14
console.log("Exercise 14");
console.log(
  deleteObjectFromArrayByKeyValuePair(employees, "department", "Marketing")
);
console.log(filterArrayByKeyValuePair(employees, "department", "Marketing"));

// Exercise 15
console.log("Exercise 15");

console.log(
  getSearchQueryResultByKey(employees, "department", "Marketing", "name")
);
// Exercise 16
console.log("Exercise 16");

console.log(
  getValueLargestKeyLetter(employees[0])
);
