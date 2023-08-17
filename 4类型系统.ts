/**
 * undefined 类型，null 类型
 */
let x: undefined = undefined;
let y: null = null;

let x1 = undefined;
let y1 = null;
console.log("typeof x", typeof x);
console.log("typeof x1", typeof x1);
console.log("typeof y", typeof y);
console.log("typeof y1", typeof y1);

let a = undefined;   // any
const b = undefined; // any

let c = null;        // any
const d = null;      // any
console.log("typeof a", typeof a);
console.log("typeof b", typeof b);
console.log("typeof c", typeof c);
console.log("typeof d", typeof d);

/**
 * typeof 运算符
 */
const aa = { x: 0 };

type T0 = typeof aa;   // { x: number }
type T1 = typeof aa.x; // number

console.log(typeof aa);
console.log(typeof aa.x);

/**
 * 值类型
 */
const xx = 'https';

// y 的类型是 string
const yy:string = 'https';
console.log("type xx", typeof xx);
console.log("type yy", typeof yy);

const x3 = { foo: 1 };
console.log("type x3", typeof x3);
console.log("type x3.foo:", typeof x3.foo); // type x3.foo: number

/**
 * 交叉类型
*/
type A = { foo: number };
type B = A & { bar: number };
const bbb:B = {foo: 1, bar: 2};
console.log("typeof bbb.foo:", typeof bbb.foo);
console.log("typeof bbb.bar:", typeof bbb.bar);