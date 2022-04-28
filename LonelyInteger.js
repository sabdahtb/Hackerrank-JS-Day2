// Mencari value dari array yang jumlahnya = 1
// dari 1 2 3 4 3 2 1 yang jumlah value nya = 1 adalah 4

const arr = [1, 2, 3, 4, 3, 2, 1];

function lonelyInteger(arr) {
  let sortArr = arr.sort();
  // urutkan array menggunakan array.sort()
  // [1,2,3,4,3,2,1] akan menjadi [1,1,2,2,3,3,4]
  let lonelyint = sortArr.filter(
    (x, i, arr) => x !== arr[i + 1] && x !== arr[i - 1]
  );
  // filter array yang sudah di sort dimana tidak ada value sama di arr[i] sebelum dan sesudah
  return lonelyint;
}

console.log(lonelyInteger(arr));
