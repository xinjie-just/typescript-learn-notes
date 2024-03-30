/*
* 类和接口的合并
*/
class A {
  x:number = 1;
}
interface A {
  y:number;
}

let a = new A();
a.y = 10;

console.log(a.x); // 1
console.log(a.y); // 10


class A2 {
  x:number = 1;
}
interface A2 {
  y:number;
}
let a2 = new A2();
console.log(a2.y); // undefined


/**
 * 类的继承
 */
class A3 {
  greet() {
    console.log("hello world");
  }
}
class B3 extends A3 {

}
const b3 = new B3();
b3.greet();
const a3:A3 = b3;
a3.greet();

// 子类可以覆盖基类的同名方法
class A4 {
  greet() {
    console.log('Hello, world!');
  }
}

class B4 extends A4 {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name}`);
    }
  }
}

const b4 = new B4();
b4.greet('TypeScript');


/**
 * protected
 */
class A5 {
  protected x = 1;
}

class B5 extends A5 {
  getX() {
    return this.x;
  }
}

const a5 = new A5();
const b5 = new B5();

// a5.x; // 属性“x”受保护，只能在类“A5”及其子类中访问。
b5.getX(); // 1

// 
class A6 {
  protected x = 1;
  protected getX() {
    return this.x;
  }
}

class B6 extends A6 {
  x = 2;
  getBaseClass() {
    super.getX();
  }
}
const a6 = new A6();
const b6 = new B6();
console.log(b6.getBaseClass());

/**
 * 实例属性的简写形式
 */
class Point7 {
  constructor(
    public x:number,
    public y:number
  ) {}
}
const p7 = new Point7(10, 10);
console.log(p7.x) // 10
console.log(p7.y) // 10


/**
 * 结构类型原则
 */
class Person8 {
  name: string = '';
}
const obj8 = { name: 'John' };
console.log(obj8 instanceof Person8); // false