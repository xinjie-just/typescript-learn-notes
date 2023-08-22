/*
* import type 语句
*/
// import { A, a } from './15模块a'; // 正确，在同一条语句中输入了类型和正常接口。

// import { type A, a } from './15模块a'; // 正确，输入的类型前面加上 `type` 关键字。

import type { A } from './15模块a'; // 正确，使用 `import type` 语句
import type { a } from './15模块a'; // 报错
const a1: A = {foo : '1'};
console.log(a1);
// const a2: a = 1;
// console.log(a2);