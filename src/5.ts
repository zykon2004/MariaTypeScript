export const demo: { [index: string]: any } = {
  FirstNAME: "Abhishek",
  Secondname: "Pritam",
  ThirdNAME: "Rahul",
  FourthNAME: "Binayak",
};
// function filterByKey (demo, key){

//    Object.keys(demo)
//     .filter((key) => key.includes("NAME"))
//     .reduce((obj, key) => {
//     return Object.assign(obj, {
//       [key]: demo[key]
//     });
//     }, {});
// }

export function filterByKey(myObj: any, keyPattern: string) {
  return Object.keys(myObj)
    .filter((key) => key.includes(keyPattern))
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: myObj[key],
      });
    }, {});
}
