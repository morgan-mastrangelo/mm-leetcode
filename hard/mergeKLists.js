let list = [[1,4,5],[1,3,4],[2,6]];

const mergeKLists = (lists) => {
    let mergedList = [];

    lists.map((list, idx) => {
        if(list.length !== 0) {
            mergedList = mergedList.concat(list);
        }
    });

    return mergedList.sort((ele1, ele2) => ele1 - ele2);
}

console.log(mergeKLists(list));