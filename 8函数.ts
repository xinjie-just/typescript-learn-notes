/**
 * 参数默认值
 */

function f1(x = 456) {
    return x;
}
console.log(f1(undefined)); // 456
// 参数设置了默认值，如果传入 undefined，将会使用默认值


/**
 * void 类型
 */

 type voidFunc = () => void;
 const f2:voidFunc = () => {
   return 123;
 };
 console.log(f2());

// 作为比较

// const f3 = (): void => {
//     return 123; // 不能将类型“number”分配给类型“void”。
// };


// type voidFunc4 = () => void;
// const f4:voidFunc4 = () => {
//   return 123;
// };
// console.log(f4() * 2); // 算术运算左侧必须是 "any"、"number"、"bigint" 或枚举类型。


/**
 * 函数重载
 */
 function reverse(str:string):string;
 function reverse(arr:any[]):any[];
 function reverse(
   stringOrArray:string|any[]
 ):string|any[] {
   if (typeof stringOrArray === 'string')
     return stringOrArray.split('').reverse().join('');
   else
     return stringOrArray.slice().reverse();
 }
 console.log(reverse('abc')); // 'cba'
 console.log(reverse(['a', 'b', 'c'])); // ['c', 'b', 'a']