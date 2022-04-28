// menghitung banyak nilai array ke i ada berapa dari 1 - 100;
// contoh [1,2,3]
// maka [0,1,1,1] => ada nilai 1,2,3 masing masing 1 maka array ke 1,2,3 = 1

const array = [
  63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
  99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3,
  89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24,
  87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33,
  46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70,
  33,
];

function countingSort(arr) {
  // buat array baru yang ber value 0 sebanayak 100
  let newArr = [];
  for (let i = 0; i < 100; i++) {
    newArr.push(0);
  }

  // tambahkan jumlah newArr[i] sebanyak 1 di arr[i]
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] += 1;
  }

  return newArr;
}

console.log(countingSort(array));
