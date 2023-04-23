export const users: { [index: string]: any } = [
  { id: 2, name: "Marcus" },
  { id: 1, name: "Christian" },
  { id: 3, name: "Norman" },
];

export function sortUsersBy(property: any) {
  return users.sort((a: any, b: any) => {
    return a[property] >= b[property] ? 1 : -1;
  });
}
