const ar = [1, 3, 4, 5, 6, 7, 8, 9, 10];

// https://leetcode.com/discuss/post/786126/python-powerful-ultimate-binary-search-t-rwv8/
// https://leetcode.com/discuss/post/2371234/an-opinionated-guide-to-binary-search-co-1yfw/
function findElement(a: number[], element: number) {
  let left = 0; // important: first, not - 1
  let right = a.length - 1; // important: last important

  function condition(midIndex: number) {
    return a[midIndex] >= element;
  }

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    // const mid = Math.floor((right + left) / 2); // out of memory range

    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1; // remember it!
    }

    // important: after exiting the while loop, left is the minimal 'element'
    // satisfying the condition function;
  }
  return left;
}

console.log(findElement(ar, 74)); // index of 7 is 5

function getFloor(value: number) {
  if (typeof value !== "number") {
    throw Error("value is not number");
  }
  return String(value).split(".")[0];
}

// console.log(getFloor(2.2345));
// console.log(getFloor(2));
