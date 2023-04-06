import { instructions } from "./1";

const world = "world";

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
console.log(hello("Yolandi"));
instructions();
