function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid,"
  }
  let larGest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > larGest) {
      secondLargest = larGest
      larGest = num;
    } else if (num > secondLargest && num !== larGest) {
      secondLargest = num;
    }

  }
  return secondLargest === 0 ? null : secondLargest;
}

console.log(findSecondLargestNumber([1, 2, 3, 4, 5]));// 4
console.log(findSecondLargestNumber([1, 1, 1]));// null
console.log(findSecondLargestNumber([1]));// null
console.log(findSecondLargestNumber("1,2"));// Invalid
console.log(findSecondLargestNumber([]));// Invalid