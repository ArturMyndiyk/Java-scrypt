const obj1 = { className: 'open menu' };
addClass(obj1, 'new');
addClass(obj1, 'open');
console.log("Завдання 1 (addClass):", obj1.className);

console.log("Завдання 2 (camelize):", camelize("background-color"));

const obj3 = { className: 'my menu menu' };
removeClass(obj3, 'menu');
console.log("Завдання 3 (removeClass):", obj3.className);

let arr4 = [5, 3, 8, 1];
filterRangeInPlace(arr4, 1, 4);
console.log("Завдання 4 (filterRange):", arr4);

let arr5 = [5, 2, 1, -10, 8];
reverseSort(arr5);
console.log("Завдання 5 (reverseSort):", arr5);

let arr6 = ["HTML", "JavaScript", "CSS"];
console.log("Завдання 6 (arraySort):", arraySort(arr6));

const people = [
    { name: "Jhon", age: 23 },
    { name: "Bill", age: 18 },
    { name: "Donald", age: 6 }
];
sortByAge(people);
console.log("Завдання 8 (sortByAge):", people);

const list = {
    value: 1,
    next: { value: 2, next: { value: 3, next: { value: 4, next: null } } }
};
console.log("Завдання 9 (printReverseList):");
printReverseList(list);

const strings = ["C++", "C#", "C++", "JavaScript", "C++"];
console.log("Завдання 10 (unique):", unique(strings));