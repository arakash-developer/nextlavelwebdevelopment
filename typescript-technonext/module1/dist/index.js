"use strict";
// // string,
// let a:string = "Hello World";
// console.log(a);
// // number,
// let roll:number = 10;
// console.log(roll);
// // boolean,
// let isPresent:boolean = true;
// console.log(isPresent);
// // any,
// let x:any = 10;
// console.log(x);
// // array,
// let arr:number[] = [1,2,3,4,5];
// console.log(arr);
// // tuple,   order type of elements is important in tuple,
// let tuple:[number,string] = [1,"Hello"];
// console.log(tuple);
// let cor : [number, number]= [1,5]
// console.log(cor);
// let cor1 : [number, string]= [1,"Hello"]
// console.log(cor1);
// // enum,
// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 3
// }
// let c:Color = Color.Green;
// console.log(c);
// // array,
// let friendss : string[] = ["John", "Jane", "Jack"];
// console.log(friendss);
// friendss.push("Jill");
// console.log(friendss);
// objects,
// let person : {name:string, age:number} = {name:"John", age:25};
// console.log(person);
// let person: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   school: 'ABC School'; // string literal type
//   persent?: boolean;
// } = {
//   name: "John",
//   age: 25,
//   isStudent: true,
//   school: "ABC School",
// };
// let person: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   readonly school: string;
//   persent?: boolean;
// } = {
//   name: "John",
//   age: 25,
//   isStudent: true,
//   school: "ABC School",
// };
// console.log(person);
// normal function
// function add(a:number, b:number):number {
//     return a + b;
// }
// console.log(add(5, 10));
// arrow function
// const add1 = (a:number, b:number):number => {
//     return a + b;
// }
// console.log(add1(5, 10));
// obect ---> function ==> method
// normal function work this but not in arrow function
// let poorUser = {
//   name: "John",
//   amount:50,
//   addbalaced(amount: number): number {
//     return this.amount + amount;
//   },
// };
// console.log(poorUser.addbalaced(1000));
// const arr :number[] = [1,2,3,4,5,6,7,8,9,10];
// let arr1:number[] = arr.map((value:number):number => {
//   return value * value;
// });
// console.log(arr1);
// function
// let add =(a:number, b:number):number => {
// return a + b;
// }
// let a = add(5, 10);
// console.log(a);
// let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1: number[] = arr.map((value: number): number => {
//   return value * value;
// });
// console.log(arr1);
// let myfriend: string[] = ["John", "Jane", "Jack"];
// let a = {
//     name:"Akash",
//     printName: function() {
//         console.log(this.name);
//     }
// }
// a.printName();
// console.log("myfriend");
//* spread Operator
// const bros1: string[] = ["John", "Jane", "Jack"];
// const bros2: string[] = ["Jill", "Joe", "Jim"];
// bros1.push(...bros2);
// const myfriend: {
//   ty: string;
//   tp: string;
// } = {
//   ty: "John",
//   tp: "Jane",
// };
// const myfriend2: {
//   ty: string;
//   tp: string;
// } = {
//   ty: "John",
//   tp: "Jane",
// };
// const mentorList ={
//     ...myfriend,
//     ...myfriend2,
//     }
//* rest  Operator
// const friendsList = (...sss:string[])=> {
//   console.log(sss);
// }
// friendsList("s", "a", "d", "f");
//* object destructuring
// const person = {
//   name: "John",
//   age: 25,
//   isStudent: true,
//   school: "ABC School",
//   friend:{
//     name: "Jane",
//     age: 22,
//   }
// };
// const { name, age, isStudent, school,friend:{name:friendName, age:friendAge} } = person;
// console.log(name);
// console.log(friendName);
// console.log(friendAge);
// console.log(person.friend.name);
//* array destructuring
// const arr: number[] = [1, 2, 3, 4, 5];
// const [a,b,number,c ] = arr;
// const [a,b,...akash ] = arr;
// console.log(b);
// console.log(akash);
// //* type alias
// type Student = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   school: string;
// };
// const isStudent: Student = {
//   name: "John",
//   age: 25,
//   isStudent: true,
//   school: "ABC School",
// };
// type userName = string;
// const userName: userName = "John";
// type isadmin = boolean;
// const isAdmin: isadmin = true;
// type Add = (num1: number, num2: number) => number;
// const add: Add = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add(5, 10));
//* union type |
// type ID = number | string;
// let id: ID = 123;
// id = "123";
// id:"akash";     
//* intersection type &
// type Admin = {
//   name: string;
//   role: number;
// };
// type User = {
//   name: string;
//   age: number;
// };
// type AdminUser = Admin & User;
// const adminUser: AdminUser = {
//   name: "John",
//   role: 1,
//   age: 25,
// };
//*  nullable types
// type Admin = {
//   name: string;
//   role: number;
// };
// type User = {
//   name: string;
//   age: number | null;
// };
// type AdminUser = Admin & User;
// const adminUser: AdminUser = {
//   name: "John",
//   role: 1,
//   age: null,
// };

console.log("akash");