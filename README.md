# Sky Codility Test
Here are my solutions written in javascript for a coding test set by Sky for their Software Developer Graduate Programme. This is just a personal record for my test solutions.

## Task 1
Days of the week are representer as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").

Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500, inclusive), returns the days of the week that is K days later.

For example, given S = "Weds" and K = 2, the function should return "Fri".

Given S = "Sat" and K = 23, the function should return "Mon".

## Task 2
Write a function:
```javascript
function solution(A);
```

that, given an array A consisting of N integers, returns the maximum among all one-digit integers.

For example, given array A as follows:
```
[-6, -91, 1011, -100, 84, -22, 0, 1, 473]
```
the function should return 1.

Assume that:
* N is an integer within the range [1..1,000];
* each element of array A is an integer within the range [-10,000..10,000];
* there is at least one element in array A which satisfies the condition in the task statement.

In your soluction, focus on **correctness**. The performance of your solution will not be the focus of your assessment.

## Task 3
You are in a browser-like environment, where you have access to the window oject, the document object, and also $ - the jQuery library. The document contains a two-dimensional table. Each cell of the table has an upper-case letter in it and has its background color and text color set. Your task is simply to read the letters in row-major order (top to bottom, left to right), concatenate them into a single string and return it. However, you need to skip the letters that cannot be seen by the human eye. These are the ones whose colour is exactly the same as their background (that is, even marginal difference can be distinguished by a human eye).

The table is created using 'table', 'tbody', 'tr' and 'td' tags. Each 'td' tag has a 'style' attribute with its CSS 'background-color' and 'color' attributes set. There is the same number of cells in each row.

Write a function
```javascript
function solution();
```
that, given a DOM tree representing an HTML document, returns a string containing all the visible letters, read in row-major order.

## License
Questions are under Copyright 2009-2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
