let nums1 = [1, 3];
let nums2 = [2, 4];

const findMedianSortedArrays = (arr1, arr2) => {
    let nums3 = nums1.concat(nums2);
    let sum = 0;

    nums3.sort((num1, num2) => num1 - num2);
    nums3.map(number => sum += number);

    let median = 0;

    if(nums3.length % 2 === 0) {
        median = (nums3[parseInt(nums3.length / 2) - 1] + nums3[parseInt(nums3.length / 2)]) / 2;
    } else {
        median = nums3[parseInt(nums3.length / 2)];
    }

    return median;
}

console.log(findMedianSortedArrays(nums1, nums2));