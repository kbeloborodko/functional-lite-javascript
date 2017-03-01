function returnRandomNumber1 () {
  return Math.floor(Math.random() * 10);
}

function returnRandomNumber2 () {
  return Math.floor(Math.random() * 10);
}

function add (x, y) {
  return x + y;
}

console.log('Sum of the random numbers is: ' + add(returnRandomNumber1(), returnRandomNumber2()));

