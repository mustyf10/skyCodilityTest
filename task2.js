// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.filter((x) => x >= -9 && x <= 9).sort(function (a, b) {
    return a - b;
  });
  return A[A.length - 1];
}