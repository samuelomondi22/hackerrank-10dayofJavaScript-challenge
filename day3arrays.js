/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let num = Array.from(new Set(nums));
    num.sort().pop();
    return num.pop();
}

getSecondLargest([2,3,6,6,5])