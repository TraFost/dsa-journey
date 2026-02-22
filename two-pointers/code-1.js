// Two Pointers: "I need to compare or combine elements at different ends of this array, moving step-by-step."

function checkTarget(arr, target) {
	let leftP = 0;
	let rightP = arr.length - 1;

	while (leftP < rightP) {
		if (arr[leftP] + arr[rightP] === target) {
			return true;
		} else if (arr[leftP] + arr[rightP] < target) {
			leftP++;
		} else if (arr[leftP] + arr[rightP] > target) {
			rightP--;
		}
	}

	return false;
}

const one = checkTarget([1, 2, 4, 6, 8, 9, 14, 15], 13);
const two = checkTarget([1, 2, 4, 6, 8, 9, 14, 15], 25);

console.log(one, two);

// checkTarget([1, 2, 4, 6, 8, 9, 14, 15], 13)  => true (because 4 + 9 = 13)
// checkTarget([1, 2, 4, 6, 8, 9, 14, 15], 25)  => false
