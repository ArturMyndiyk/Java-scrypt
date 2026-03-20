function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];
    if (!classes.includes(cls)) {
        classes.push(cls);
    }
    obj.className = classes.join(' ');
}

function camelize(str) {
    return str
        .split('-')
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

function removeClass(obj, cls) {
    let classes = obj.className.split(' ');
    obj.className = classes.filter(item => item !== cls).join(' ');
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

function reverseSort(arr) {
    arr.sort((a, b) => b - a);
}

function arraySort(arr) {
    return arr.slice().sort();
}

function randomSort(arr) {
    arr.sort(() => Math.random() - 0.5);
}

function sortByAge(people) {
    people.sort((a, b) => a.age - b.age);
}

function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

function printListRec(list) {
    console.log(list.value);
    if (list.next) printListRec(list.next);
}

function printReverseListRec(list) {
    if (list.next) printReverseListRec(list.next);
    console.log(list.value);
}

function printReverseList(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) result.push(str);
    }
    return result;
}