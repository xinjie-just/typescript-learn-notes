/**
 * 只读属性
 */
interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
let w:Person = {
  name: 'Vicky',
  age: 42,
};
let r:ReadonlyPerson = w;
// w.age += 1;
// console.log("r.age", r.age);

r.age = 44;
