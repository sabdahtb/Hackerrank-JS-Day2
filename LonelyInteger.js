const arr = [1, 2, 3, 4, 3, 2, 1];

function lonelyInteger(arr) {
  let sortArr = arr.sort();
  let lonelyint = sortArr.filter(
    (x, i, arr) => x !== arr[i + 1] && x !== arr[i - 1]
  );
  return lonelyint;
}

console.log(lonelyInteger(arr));
