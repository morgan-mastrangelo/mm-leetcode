let num = 14;

const numberOfSteps = (num) => {
    let steps = 0;

    while(num > 0) {
        if(num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }

        steps++;
    }

    return steps;
}

console.log(numberOfSteps(num));