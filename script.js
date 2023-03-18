
// LOGICAL OPERATORS

const hasDriversLicense = true;

const hasGoodVision = true;

// A and B variables

console.log(hasDriversLicense && hasGoodVision);
//&& = AND operator
// bother values needs to be true for the operation to return true. 

console.log(hasDriversLicense || hasGoodVision);
// || = OR operator
// only one needs to be true for the operation to return true

console.log(!hasDriversLicense);
// '!' = not operator 

const canDrive = hasDriversLicense && hasGoodVision;
console.log(canDrive);

if(hasDriversLicense && hasGoodVision) {
    console.log("It's ok, you can drive!");
} else {
    console.log("Someone else should drive!");
}


const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasGoodVision && hasDriversLicense && !isTired) {
    console.log("Sarah is ok to drive!");
} else {
    console.log("Someone else should drive!");
}

// OPERATOR PRECEDENCE

const now = 2021
const myAge = now - 1985;
const brothersAge = now - 1991; 

console.log(now - 1991 > now - 1985);

console.log(myAge);
console.log(brothersAge);

console.log(25 -10 -5);

// assignment right to left

let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);


//const averageAge = myAge + brothersAge / 2;  

const averageAge = (myAge + brothersAge) / 2;
console.log(myAge, brothersAge, averageAge);



// TEST DATA 1

let base = 10;
let height = 13;

const triangleOneName = " Triangle One";
const triangleOne = (base * height) / 2;
console.log(triangleOneName);
console.log(triangleOne);

base = 16.5;
height = 20.3;

const triangleTwoName = "Triangle Two";
const triangleTwo = (base * height) / 2;
console.log(triangleTwoName);
console.log(triangleTwo);


if (triangleOne > triangleTwo){
   console.log(`${triangleOneName} has an area of ${triangleOne} square cm, which is bigger than ${triangleTwoName}, which has a ${triangleTwo} square cm area.`);
} else {
   console.log(`${triangleTwoName} has an area of ${triangleTwo} square cm, which is bigger than ${triangleOneName}, which has a  ${triangleOne} square cm area.`);
}


// TEST DATA 2

base = 16.5;
height = 20.3;

const triangleThreeName = "Triangle Three";
const triangleThree = (base * height) / 2;
console.log(triangleThreeName);
console.log(triangleThree);

base = 20.3;
height = 16.5;

const triangleFourName = "Triangle Four";
const triangleFour = (base * height) / 2;
console.log(triangleFourName);
console.log(triangleFour);

if (triangleThree === triangleFour){
    console.log(`${triangleThreeName} has an area of ${triangleThree} square cm, this is equal to the area of ${triangleFourName} which is, ${triangleFour} square cm`);
} else if (triangleThree > triangleFour){
    console.log(`${triangleThreeName} area is ${triangleThree} square cm, which is bigger than ${triangleFourName} which has an area of ${triangleFour} square cm`);
} else {
    console.log(`${triangleFourName} has an area of ${triangleFour} which is larger than the area of ${triangleThreeName} being ${triangleThree} square cm`);
}

//TEST DATA 3

base = 7.8;
height = 5.6;

const triangleFiveName = "Triangle Five";
const triangleFive = (base * height) / 2;
console.log(triangleFiveName);
console.log(triangleFive); 

base = 9.3;
height = 12.4;

const triangleSixName = "Triangle Six";
const triangleSix = (base * height) / 2;
console.log(triangleSixName);
console.log(triangleSix);

if (triangleFive > triangleSix){
    console.log(`${triangleFiveName} has an area of ${triangleFive} square cm, which is bigger than ${triangleSixName}, which has an area of ${triangleSix} square cm`);
} else {
    console.log(`${triangleSixName} has an area of ${triangleSix} square cm, which is bigger than ${triangleFiveName}, which has an area of ${triangleFive} square cm`);
}


const triangleNames = ["Triangle One", "Triangle Two", "Triangle Three", "Triangle Four", "Triangle Five", "Triangle Six"];

const triangleAreas = [triangleOne, triangleTwo, triangleThree, triangleFour, triangleFive, triangleSix];

const largestAreaIndex = triangleAreas.indexOf(Math.max(...triangleAreas));

const largestAreaTriangleName = triangleNames[largestAreaIndex];

console.log(`The triangle with the largest area is ${largestAreaTriangleName}`);












