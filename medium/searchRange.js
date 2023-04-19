let nums = [5,7,7,8,8,10], target = 8;

const searchRange = (nums, target) => {
    let searchIndexArray = [];

    nums.map((number, index) => {
        if(number === target) {
            searchIndexArray.push(index);
        }
    });

    if(searchIndexArray.length === 0) {
        return [-1, -1];
    } else {
        return [searchIndexArray[0], searchIndexArray[searchIndexArray.length - 1]];
    }
}

console.log(searchRange(nums, target));