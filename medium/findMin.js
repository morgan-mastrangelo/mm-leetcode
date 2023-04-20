let nums = [4,5,6,7,0,1,2];

const findMin = nums => {
    return nums.sort((a, b) => a - b).reduce((min, num) => min < num ? min : num);
}

console.log(findMin(nums));