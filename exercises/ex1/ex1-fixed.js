function bar (x, y) {
  var z;

  function foo(x) {
    y++;
    z = x * y;
  }

  foo(x);
  return z;
}

console.log(bar(20, 5));

console.log(bar(25, 5));
