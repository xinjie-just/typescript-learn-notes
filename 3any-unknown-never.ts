let a:unknown = 1;

if (typeof a === 'number') {
  let r = a + 10; // 正确
  console.log("r", r);
}


let s:unknown = 'hello';

if (typeof s === 'string') {
  s.length; // 正确
  console.log("length", s.length);
}

// 在当前目录下执行 `npx ts-node 3any-unknown-never.ts` 运行结果