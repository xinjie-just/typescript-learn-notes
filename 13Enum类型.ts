enum Color {
    Red,     // 0
    Green,   // 1
    Blue     // 2
}

console.log("Color.Red", Color.Red);  // 0
console.log("Color.Green", Color['Green']); // 1

/**
 * 成员的值
 */
enum Color1 {
    Red,
    Green,
    Blue
}

enum Color2 {
    Red = 0,
    Green = 1,
    Blue = 2
}

enum Color3 {
    Red = 0,
    Green = 0,
    Blue = 0
}
console.log("Color3.Red", Color3.Red);  // 0
console.log("Color3.Green", Color3['Green']); // 0
console.log("Color3.Blue", Color3['Blue']); // 0

enum Color4 {
    Red = 7,
    Green,  // 8
    Blue   // 9
}
console.log("Color4.Red", Color4.Red);  // 7
console.log("Color4.Green", Color4['Green']); // 8
console.log("Color4.Blue", Color4['Blue']); // 9


enum Color5 {
    Red, // 0
    Green = 7,
    Blue // 8
}
console.log("Color5.Red", Color5.Red);  // 0
console.log("Color5.Green", Color5['Green']); // 7
console.log("Color5.Blue", Color5['Blue']); // 8


enum Color6 {
    Red, // 0
    Green,
    Blue = 1 // 8
}
console.log("Color6.Red", Color6.Red);  // 0
console.log("Color6.Green", Color6['Green']); // 1
console.log("Color6.Blue", Color6['Blue']); // 1

/**
 * 同名 Enum 的合并
 */
 enum Foo1 {
    A,
  }
console.log("Foo1", Foo1); // Foo1 { '0': 'A', A: 0 }


 enum Foo2 {
    A,
  }
  
  enum Foo2 {
    B = 1,
  }
  
  enum Foo2 {
    C = 2,
  }
  console.log("Foo2", Foo2); // Foo2 { '0': 'A', '1': 'B', '2': 'C', A: 0, B: 1, C: 2 }
  console.log("Foo2[0]", Foo2[0]);  // A
  console.log("Foo2[1]", Foo2[1]);  // B
  console.log("Foo2[2]", Foo2[2]);  // C
  console.log("Foo2['0']", Foo2['0']);  // A
  console.log("Foo2['1']", Foo2['1']);  // B
  console.log("Foo2['2']", Foo2['2']);  // C
  console.log("Foo2['A']", Foo2['A']);  // 0
  console.log("Foo2['B']", Foo2['B']);  // 1
  console.log("Foo2['C']", Foo2['C']);  // 2

  /**
   * keyof 运算符
   */
enum MyEnum {
    A = 'a',
    B = 'b'
}

// 'A'|'B'
type Foo = keyof typeof MyEnum;
type Foo12 = keyof MyEnum;

/**
 * in 运算符
 */
 enum MyEnum13 {
    A = 'a',
    B = 'b'
  }
  
  // type Foo13 = { a: number; b: number; }
  type Foo13 = { [key in MyEnum]: number };

  /**
   * 反向映射
   */
   enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  console.log(Weekdays[3]) // Wednesday
  console.log(Weekdays['Wednesday']) // 3

  /**
   * 成员类型
   */

   enum MyEnum15 {
    A = 123,
    B = '1' + '2', // 正确，字符串计算值
  }
  type e1 = MyEnum15;
  type e2 = keyof typeof MyEnum15;
  type e5 = typeof MyEnum15.B;
  type e3 = {[key in MyEnum15]: number}; // type e3 = { 123: number; 12: number; }

  enum MyEnum16 {
    A = 123,
    B = '1',
  }
  type e4 = {[key in MyEnum16]: string}; // type e4 = { 123: string; 1: string; }