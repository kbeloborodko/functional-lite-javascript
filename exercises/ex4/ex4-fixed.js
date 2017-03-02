(function () {
  'use strict';

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

  function add2 (func1, func2) {
    return add(func1(), func2());
  }

  console.log('Sum of the random numbers using add2 function is: ' + add(returnRandomNumber1(), returnRandomNumber2()));

  function returnRandomFunction () {
    return function () {
      return Math.floor(Math.random() * 10);
    }
  }

  var randomNumberFunc = returnRandomFunction();

  console.log('A random number using the returnRandomFunction utility: ' + randomNumberFunc());

  function addn (...args) {
    return args.slice(1).reduce(function (prev, current) {
      return function () {
        return add2(prev, current);
      }
    }, args[0])();
  }

  console.log('A sum of 3 random numbers using addn function: ' + addn(returnRandomNumber1, returnRandomNumber2, returnRandomNumber1));

  var evenOddArray = [1, 2, 2, 3, 2, 4, 2, 5, 6, 7];
  var filteredEvenOddArray = evenOddArray.filter(function (item) {
    return item % 2 === 0;
  });

  console.log('Filter [1, 2, 2, 3, 2, 4, 2, 5, 6, 7] array to contain only even numbers', filteredEvenOddArray);
})();