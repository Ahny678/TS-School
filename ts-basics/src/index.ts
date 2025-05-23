let age: number = 20;
if (age < 50) {
  age += 1;
}
console.log(age);

//function parameters without anotations. can specify it as any or use   "noImplicitAny": false in tsconfig
const aFunc = (document: any) => {
  console.log(document);
};

//arrays

//const array1: number[] = [1, 2, 3, "err"]; //err will be underlined red
const arr2 = [1, 2, "4"];
arr2[3] = "pickle";
console.log(arr2);

//tuples--> each element in an array is a distinct type
let user: [number, string, boolean] = [1, "lulu", true]; //explictly states the order
let user1 = [1, "lulu", true];

//enums
enum Rank {
  Bronze = 100,
  Silver = 200,
  Gold = 1000,
}
let myRank: Rank = Rank.Gold;
console.log(myRank);

//functions
//specify the return types at the first line of the function
//use void if not retuning anything
//make a paramter optional by giving it a def value
const enchore = (chant: string, count = 2): string => {
  if (count < 2) {
    return `no fans`;
  }
  return `${chant}!!!`;
};
console.log(enchore("men", 1));

//objects
//must define the logics of the object. kind of like a schema

let student: {
  readonly id: number;
  name: string;
  likes?: string;
  retire?: (date: string, medals: number) => void;
} = {
  id: 1,
  name: "lulu",
};
student.name = "lul";
