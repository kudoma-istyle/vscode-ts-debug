"use strict";
/* primitive type */
// const a: number = 3;
// const b: string = a;
// const a: null = null;
// const b: string = a;
/* literal type */
// const a: 'foo' = 'foo';
// const b: 'bar' = 'foo';
// const a: 'foo' = 'foo';
// const b: string = a;
/* literal type &  type inference */
// const a = 'foo';
// const b: string = a;
// let a = 'foo';
// const b: string = a;
// const c: 'foo' = a;
// let a: 'foo' = 'foo';
// a = 'bar';
/* object type */
// interface MyObj {
//   foo: string;
//   bar: number;
// }
// const a: MyObj = {
//   foo: 'foo',
//   bar: 3,
// }
// const b: MyObj = {
//   foo: 'foo',
//   bar: 'bar',
// }
// const c: MyObj = {
//   foo: 'foo',
// }
// interface MyObj2 {
//   foo: string;
// }
// const a2: MyObj2 = a;
// const b2: MyObj2 = {foo: 'foo', bar: 3};
/* array type */
var foo = [0, 1, 2, 3];
foo.push(4);
/* function type */
// const f: (foo: string) => number = func;
// function func(arg: string): number {
//   return Number(arg);
// }
/* function subtype relationships */
/* variable length parameter */
/* void type */
/* any type */
/* class type */
/* generics */
/* tuple type */
/* tuple type & variable length parameter */
/* tuple type */
console.log(foo);
//# sourceMappingURL=nyumon.js.map