let head = [1, 2, 1];

const isPalindrome = (head) => {
    let isSame = true;

    for(let i = 0; i < head.length; i++) {
        if(head[i] !== head[head.length - 1 - i]) {
            isSame = false;
        }
    }

    return isSame;
}

console.log(isPalindrome(head));