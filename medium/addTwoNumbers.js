let l1 = [2,4,3], l2 = [5,6,4];

const listToNumber = (list) => {
    let number = 0;

    for(let i = 0; i < list.length; i++) {
        number += list[i] * Math.pow(10, i);
    }

    return number;
}

const numberToList = (number) => {
    let list = [];

    while(number > 0) {
        list.push(number % 10);
        number = parseInt(number / 10);
    }

    return list;
}

const addTwoNumbers = (l1, l2) => {
    return numberToList(listToNumber(l1) + listToNumber(l2));
}

console.log(addTwoNumbers(l1, l2));