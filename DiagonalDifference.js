// Mencari nilai matriks dari array
// 1 2 3  kanan = 1 + 5 + 9 = 15
// 4 5 6  kiri = 3 + 5 + 9 = 17
// 9 8 9  hasil = 15 - 17 = -2 karena absolute maka hasil = 2 (tidak negatif)

const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let kiri = 0;
  let kanan = 0;

  // gunakan j untuk mengambil 1 nilai dari setiap array matriks kanan
  let j = 0;
  // gunakan k untuk mengambil 1 nilai dari setiap array matriks kiri
  let k = arr[0].length - 1;

  // looping ketiga array dan ambil value yang menghasilkan nilai matriks kanan
  for (let i = 0; i < arr.length; i++) {
    kanan += arr[i][j];
    j++;
  }
  // looping ketiga array dan ambil value yang menghasilkan nilai matriks kiri
  for (let i = 0; i < arr.length; i++) {
    kiri += arr[i][k];
    k--;
  }

  // return hasil kanan - kiri
  // buat hasil menjadi selalu positif dengan Math.abs() => absolute
  return Math.abs(kanan - kiri);
}

console.log(diagonalDifference(array));
