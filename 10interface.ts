/**
 * interface 和 type 的比较，interface 中可以使用 this
 */
interface Foo {
  add(num:number): this;
};
class Calculator implements Foo {
  result = 0;
  add(num:number) {
    this.result += num;
    console.log("this", this);
    return this;
  }
}
const c = new Calculator();
// c(5);