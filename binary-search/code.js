function binarySearch(arr, target) {
	// left and right pointers to keep track of the search range
	let left = 0; // left pointer
	let right = arr.length - 1; // right pointer

	// while the left pointer is less than or equal to the right pointer, keep searching
	while (left <= right) {
		const val = Math.floor((left + right) / 2);
		const guess = arr[val];

		// if the guess is equal to the target, we found the target
		if (guess === target) {
			return val;
		} // if the guess is too high, search the left side
		else if (guess > target) {
			right = val - 1;
		} // if the guess is too low, search the right side
		else {
			left = val + 1;
		}
	}

	// if the target is not found, return null
	return null;
}

const list = [1, 3, 5, 7, 9];

console.log(binarySearch(list, 3)); // 1
console.log(binarySearch(list, -1)); // null
