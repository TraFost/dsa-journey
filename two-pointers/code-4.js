// Prompt:
// Diberikan array integer yang sudah diurutkan (ascending) dan sebuah angka target.
// Buat function findPair(arr, target) untuk mencari dua angka yang kalau dijumlahkan hasilnya sama persis dengan target.
// Kembalikan kedua angka tersebut di dalam array.

// Example:
// findPair([2, 7, 11, 15], 9) => Output: [2, 7] (2 + 7 = 9)
// findPair([1, 2, 3, 4, 6], 6) => Output: [2, 4] (2 + 4 = 6)

function findPair(arr, target) {
	let leftP = 0;
	let rightP = arr.length - 1;

	let val = null;

	while (leftP < rightP) {
		console.log(arr[leftP], arr[rightP]);

		const total = arr[leftP] + arr[rightP];

		if (total === target) {
			return [arr[leftP], arr[rightP]];
		} else if (total < target) {
			leftP++;
		} else if (total > target) {
			rightP--;
		}
	}

	return val;
}

const val = findPair([2, 7, 11, 15], 9);

console.log(val, ",");
