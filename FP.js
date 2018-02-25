const mapForEach = (list, task) => {
  let newList = [];

  for(let item of list) {
    newList.push(task(item));
  };

  return newList;
};

const double = (input) => input * 2;
const triple = (input) => input * 3;
const limitHard = (input) => input > 2;
const limitSoft = (limit, input) => input > limit;

let data = [1, 2, 3, 4];
let limit = 2;

const returnDouble = mapForEach(data, double);
const returnTriple = mapForEach(data, triple);
const returnLimit = mapForEach(data, limitHard);

// bind to preset the overflow variable for the task function:
const returnCheck = mapForEach(data, limitSoft.bind(this, limit));

// return function to abstract bind from the function call:
const limitSoftBind = (limit) => {
  return limitSoft.bind(this, limit);
};

const returnCheckBound = mapForEach(data, limitSoftBind(2));

console.log(returnDouble);
console.log(returnTriple);
console.log(returnLimit);
console.log(returnCheck);
console.log(returnCheckBound);
