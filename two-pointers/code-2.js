// Question 2: Squares of a Sorted Array

// This one introduces a really fun twist on the opposite-ends pattern.

// The Prompt:
// You are given an array of integers sorted in ascending order. Return a new array containing the squares of each number, also sorted in ascending order.

// The Catch: The array can contain negative numbers. When you square a negative number, it becomes positive (e.g., -4 * -4 = 16).
// This means the largest squared numbers will always be at the absolute edges of your input array, and the smallest will be in the middle!

// Examples:
// sortedSquares([-4, -1, 0, 3, 10]) => [0, 1, 9, 16, 100]
// sortedSquares([-7, -3, 2, 3, 11]) => [4, 9, 9, 49, 121]

// Constraints:
// You must do this in O(n) time complexity. This means you can only loop through the input array exactly once.
// You cannot just square everything and then use JavaScript's .sort() method (that is too slow and will fail the interview!).
// You are allowed to create a new array to hold your final answers.

function sortedSquares(arr) {
	let leftP = 0;
	let rightP = arr.length - 1;

	const squaredVal = [];

	while (leftP <= rightP) {
		const leftSquare = arr[leftP] * arr[leftP];
		const rightSquare = arr[rightP] * arr[rightP];

		if (rightSquare > leftSquare) {
			squaredVal.unshift(rightSquare);
			rightP--;
		} else {
			squaredVal.unshift(leftSquare);
			leftP++;
		}
	}

	return squaredVal;
}

const val = sortedSquares([[-4, -1, 0, 3, 10]]); // => [0, 1, 9, 16, 100]

console.log(val, "<< val");
