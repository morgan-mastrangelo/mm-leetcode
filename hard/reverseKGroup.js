let head = [1,2,3,4,5], k = 2;

const reverseKGroup = (head, k) => {
    let reversedArray = [], flag = 0;

    while(flag < head.length) {
        reversedArray = reversedArray.concat(head.slice(flag, flag+k).reverse());
        flag += k;
    }

    return reversedArray;
}

console.log(reverseKGroup(head, k));