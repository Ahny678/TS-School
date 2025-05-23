"use strict";
let age = 20;
if (age < 50) {
    age += 1;
}
console.log(age);
const aFunc = (document) => {
    console.log(document);
};
const arr2 = [1, 2, "4"];
arr2[3] = "pickle";
console.log(arr2);
let user = [1, "lulu", true];
let user1 = [1, "lulu", true];
var Rank;
(function (Rank) {
    Rank[Rank["Bronze"] = 100] = "Bronze";
    Rank[Rank["Silver"] = 200] = "Silver";
    Rank[Rank["Gold"] = 1000] = "Gold";
})(Rank || (Rank = {}));
let myRank = Rank.Gold;
console.log(myRank);
const enchore = (chant, count = 2) => {
    if (count < 2) {
        return `no fans`;
    }
    return `${chant}!!!`;
};
console.log(enchore("men", 1));
let student = {
    id: 1,
    name: "lulu",
};
student.name = "lul";
