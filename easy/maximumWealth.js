let accounts = [[2,8,7],[7,1,3],[1,9,5]];

const maximumWealth = (accounts) => {
    let sums = [];

    for(let i = 0; i < accounts.length; i++) {
        let sum = 0;

        for(let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }

        sums.push(sum);
    }

    return sums.reduce((max, number) => max > number ? max : number);
}

console.log(maximumWealth(accounts));