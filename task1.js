// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const day = daysOfWeek.indexOf(S) + 1;

  const daysLater = (day + K) % daysOfWeek.length;

  return daysOfWeek[daysLater - 1];
}