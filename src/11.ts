export const arr: { id: number; name: string }[] = [
  { id: 2, name: "Marcus" },
  { id: 1, name: "Christian" },
  { id: 3, name: "Norman" },
];

function findFromValues(myObj: Object, myStr: string): boolean {
  return Object.values(myObj).some((value) => {
    return value === myStr;
  });
}

export function findValueInObjectArray(
  arr: Array<any>,
  value: string
): boolean {
  return arr.some((obj) => {
    return findFromValues(obj, value);
  });
