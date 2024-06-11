const arr = [1, 2, 3, 4, 5];

const nextArrBad = arr; // 배열을 복사하는게 아니라 똑같은 배열가리킴
nextArrBad[0] = 100;

console.log(arr === nextArrBad); // True or False ?

const nextArrGood = [...arr]; // 배열 내부 값을 복사해서 새로이 할당
nextArrGood[0] = 100;

console.log(arr === nextArrGood); // True or False ?

const obj = {
  foo: 'bar',
  value: 1,
};

const nextObjBad = obj;
nextObjBad.value = nextObjBad.value + 1;
console.log(obj === nextObjBad); // True or False ?

const nextObjGood = {
  ...obj,
  value: obj.value + 1,
};

console.log(obj === nextObjGood); // True or False ?
