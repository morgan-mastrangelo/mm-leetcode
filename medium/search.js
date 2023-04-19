let nums = [4,5,6,7,0,1,2], target = 0;

const search = (nums, target) => {
    let searchIndex = -1;

    nums.map((number, index) => {
        if(number === target) {
            searchIndex = index;
        }
    });

    return searchIndex;
}

console.log(search(nums, target));