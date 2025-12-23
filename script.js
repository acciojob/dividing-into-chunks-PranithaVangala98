const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      // close current subarray
      result.push(currentSubarray);
      // start new subarray
      currentSubarray = [num];
      currentSum = num;
    }
  }

  // push last subarray if not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }
  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
