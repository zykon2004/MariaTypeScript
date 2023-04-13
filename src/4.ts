export function instructions(): void {
  console.log("SIT! Stay.... OK!");
}

let myArray: {id: number, name: string}[] = [
  { "id": 0, "name": "Bvailable" },
  { "id": 1, "name": "Available" },
  { "id": 2, "name": "Cvailable" },
  { "id": 3, "name": "Dvailable" },
  { "id": 4, "name": "Evailable" },
  { "id": 1, "name": "Available" },
];

export const deleteDouble = myArray.filter((obj, index) => {
  return myArray.indexOf(obj) === index;
} );



//while // indexOf