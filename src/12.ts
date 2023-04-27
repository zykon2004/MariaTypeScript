export const employees: { [propKey: string]: string | number }[] = [
  { id: 2, name: "Marcus", department: "Marketing" },
  { id: 22, name: "Yolandi", department: "Marketing" },
  { id: 1, name: "Christian", department: "R&D" },
  { id: 3, name: "Norman", department: "IT" },
  { id: 4, name: "Mia", department: "CEO" },
];
export function getDepartmentById(myKey: string, myValue: number): any {
  let result = employees.find((_obj) => {
    return _obj[myKey] === myValue;
  });
  return result ? result.department : null;
}

const x: { [propKey: string]: string | number }[] = [
  { id: 2, name: "Marcus", department: "Mang" },
  { id: 3, name: "rman", department: "IT" },
  { id: 4, name: "Mia", department: "CEO" },
];
let y: boolean = employees[1].constructor === x.constructor;
console.log(y);
