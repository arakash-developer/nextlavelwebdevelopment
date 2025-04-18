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
