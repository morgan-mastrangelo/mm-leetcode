let head = [1,2,3,4,5];

const middleNode = (head) => {
    let middleList = [];

    for(let i = parseInt(head.length / 2); i < head.length; i++) {
        middleList.push(head[i]);
    }

    return middleList;
}

console.log(middleNode(head));