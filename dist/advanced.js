"use strict";
var _a;
let ahny = {
    id: 1,
    name: "nie",
};
console.log(ahny.name);
const counter = (count) => {
    console.log(count);
};
counter(1);
counter("one");
let eagle = {
    canEatMeat: false,
    canFly: true,
};
console.log(eagle.canFly);
let hello = "ma";
const congrats = (id) => {
    return id === 0 ? null : { name: "Winner" };
};
console.log(congrats(1));
console.log((_a = congrats(0)) === null || _a === void 0 ? void 0 : _a.awards);
