// (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)
// (?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$
export function checkMultipleConditionsRegex(str: string): boolean {
  const regexPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  return regexPattern.test(str);
}
export function checkMultipleConditionsArray(str: string): boolean {
  const conditionArray = [
    str.length >= 8,
    str != str.toLowerCase(),
    str != str.toUpperCase(),
    /\d/.test(str),
    /\W/.test(str),
  ];
  return !conditionArray.includes(false);
}
// console.log(
//   checkMultipleConditionsArray("AaMaria1!")
//     ? "Maria is Awesome"
//     : "Maria is still pretty awesome. Everyone makes mistakes!"
// );
// console.log(
//   checkMultipleConditionsRegex("AaMaria1!")
//     ? "Maria is Awesome and knows Regex"
//     : "Maria is still pretty awesome. Everyone makes mistakes!"
// );
// console.log(
//   checkMultipleConditionsRegex("MMMMMMM!1")
//     ? "Maria is still pretty awesome. Everyone makes mistakes!"
//     : "Maria is Awesome and knows Regex"
// );
