/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    // Create a new set of arrays without duplicates [2,3,6,5]
    let num = Array.from(new Set(nums));
    // arrange the array and remove the largest digit
    num.sort().pop();
    // remove the second highest digit
    return num.pop();
}

getSecondLargest([2,3,6,6,5])