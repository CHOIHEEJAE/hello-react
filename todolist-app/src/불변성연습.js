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

const todos = [
  {
    id: 1,
    checked: false,
  },
  {
    id: 2,
    checked: true,
  },
];

const nextTodos = [...todos];

nextTodos[0].checked = true;
console.log(todos[0].checked === nextTodos[0].checked);

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};

console.log(todos[0] === nextTodos[0]);

// STUDY HEEJAE -> obsidian : 얕은복사 vs 깊은복사
// 얕은 복사와 깊은 복사 차이점 점검
// 얕은 복사는 주소값 복사로 객체 변경 시 실제 주소에 존재하는 객체가 변경됨
// 깊은 복사는 주소가 아닌 객체 안에 값을 복사해 새로운 메모리에 저장, 깊은 복사를 통해 복사한 객체를 변경해도 실 주소에 있는 원래 객체 값은 변경되지 않음
