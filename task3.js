// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
  // write your code in Javascript
  //
  // you can access DOM Tree using DOM Object Model:
  //    document.getElementsByTagName
  // or using jQuery:
  //    $('some_tag')
  //
  // please note that element.innerText is not supported,
  // you can use element.textContent instead.
  const letters = document.getElementsByTagName("td");
  let visibleLetters = [];

  for (i = 0; i < letters.length; i++) {
    if (letters[i].style.backgroundColor !== letters[i].style.color) {
      visibleLetters.push(letters[i].firstChild.textContent);
    }
  }

  return visibleLetters.join("");
}