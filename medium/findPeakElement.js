let nums = [1,2,1,3,5,6,4];

const findPeakElement = (nums) => {
    let index = 0;

    nums.map((num, idx) => {
        if(num === nums.reduce((peak, num) => peak > num ? peak : num)) {
            index = idx;
        }
    });

    return index;
}

console.log(findPeakElement(nums));