//custom datatypes
type Student = {
  readonly id: number;
  name: string;
  likes?: string;
  retire?: (date: string, medals: number) => void;
};

let ahny: Student = {
  id: 1,
  name: "nie",
};
console.log(ahny.name);

//union operator for annotations
const counter = (count: string | number): void => {
  console.log(count);
};
counter(1);
counter("one");

//intersections

type Flyable = {
  canFly: boolean;
};

type canMeat = {
  canEatMeat: boolean;
};

type Bird = canMeat & Flyable;

let eagle: Bird = {
  canEatMeat: false,
  canFly: true,
};
console.log(eagle.canFly);

//literals
//constraining the value for a variable

type Greeting = "sir" | "ma";

let hello: Greeting = "ma";

//optional property acces

type Singer = {
  name: string;
  awards?: number;
};

const congrats = (id: number): Singer | null => {
  return id === 0 ? null : { name: "Winner" };
};
console.log(congrats(1));
console.log(congrats(0)?.awards);
