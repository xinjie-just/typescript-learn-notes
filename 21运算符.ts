/**
 * keyof 运算符
 */
type MyObj = {
    foo: number,
    bar: string,
};

type Keys = keyof MyObj; // 'foo'|'bar'
let k1:Keys = 'bar';

type KeyT1 = keyof any;

interface T2 {
    0: boolean;
    a: string;
    b(): void;
}
type KeyT2 = keyof T2; // 0 | 'a' | 'b'


interface T3 {
    [prop: number]: number;
}
type KeyT3 = keyof T3; // type KeyT3 = number


interface T4 {
    [prop: string]: number;
}
type KeyT4 = keyof T4; // type KeyT4 = string | number


const arr1: string[] = ['a', 'b', 'c'];
type Result = keyof typeof arr1;


// 对于联合类型，keyof 返回成员共有的键名。
type A5 = { a: string; z: boolean };
type B5 = { b: string; z: boolean };
type KeyT5 = keyof (A5 | B5); // type KeyT = "z", keyof (A | B) <=> 'z'


// 对于交叉类型，keyof 返回所有键名。
type A6 = { a: string; x: boolean };
type B6 = { b: string; y: number };

// 返回 'a' | 'x' | 'b' | 'y'
type KeyT6 = keyof (A6 & B6); // type KeyT6 = keyof A6 | keyof B6
type KeyT7 = keyof A6;
const a7: KeyT7 = 'a'; // 正确，证明 KeyT7 含有 'a'  类型
const a77: KeyT7 = 'x'; // 正确，证明 KeyT7 含有 'x'  类型
// 证明 keyof A6 返回联合类型 'a' | 'x'

type KeyT8 = keyof B6;
const a8: KeyT8 = 'b'; // 正确，证明 KeyT8 含有 'b'  类型
const a788: KeyT8 = 'y'; // 正确，证明 KeyT8 含有 'y'  类型
// 证明 keyof B6 返回联合类型 'b' | 'y'
// 证明 keyof A6 | keyof B6 返回联合类型 'a' | 'x' | 'b' | 'y'


// 取出对象属性值的联合类型
type MyObj9 = {
    foo: number,
    bar: string,
};

type Keys9 = keyof MyObj9;

type Values9 = MyObj9[Keys]; // type Values9 = string | number，MyObj9[Keys] <=> string | number


/**
 * in 运算符
 */
 type U = 'a'|'b'|'c';

 type Foo20 = {
   [Prop in U]: number;
 };
 // 等价于：
// type Foo20 = {
//     a: number;
//     b: number;
//     c: number;
// }


type NewProps21<Obj> = {
    [Prop in keyof Obj]: boolean;
  };
  
  // 用法
  type MyObj21 = { foo: number; };
  
  // 等于 { foo: boolean; }
  type NewObj21 = NewProps21<MyObj21>;


/**
 * 方扩号 [] 运算符
 *  */  
type Person40 = {
    age: number;
    name: string;
    alive: boolean;
};
type Age40 = Person40['age']; // type Age40 = number, Person40['age'] <=> number
type Name40 = Person40["name"]; // type Name40 = string, Person40['name'] <=> string

type Person41 = {
    age: number;
    name: string;
    alive: boolean;
};
type T41 = Person41['age'|'name']; // type T41 = string | number, Person41['age'|'name'] <=> string | number
type A41 = Person41[keyof Person41]; // type A41 = string | number | boolean, Person41[keyof Person41] <=> string | number | boolean


type Obj = {
    [key:string]: number,
};
type T = Obj[string]; // type T = number


const MyArray = ['a','b','c'];
// 等同于 (typeof MyArray)[number]
type Person = typeof MyArray[number]; // type Person = string, typeof MyArray[number] <=> string

/**
 * 模版字符串
 */

 type World = "world";
 type Greeting = `hello ${World}`; // type Greeting = "hello world"

type T70 = 'A'|'B';
type U70 = `${T70}_id`; // type U70 = "A_id" | "B_id"

type T71 = 'A'|'B';
type U71 = '1'|'2';
// 'A1'|'A2'|'B1'|'B2'
type V71 = `${T71}${U71}`; // type V71 = "A1" | "A2" | "B1" | "B2"