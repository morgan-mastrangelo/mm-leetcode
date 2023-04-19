const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let str = "DCXXI";

const romanToInt = s => {
    let total = 0;
    let flag = 0;

    for(let i = 0; i < s.length; i++) {
        if(data[s[i]] > data[s[i+1]]) {
            let num = 0;

            for(let j = flag; j < i + 1; j++) {
                num += data[s[j]];
            }
            total += num;
            flag = i + 1;
        } else if(data[s[i]] < data[s[i+1]]) {
            let num = 0;

            for(let j = flag; j < i + 1; j++) {
                num += data[s[j]];
            }

            total += data[s[i+1]] - num;
            flag = i + 2;
            i++;
        }

        console.log(total);

        if(i === s.length - 1) {
            let num = 0;
            for(let j = flag; j < s.length; j++) {
                num += data[s[j]];
            }

            total += num;
        }
    }

    return total;
}

console.log(romanToInt(str));