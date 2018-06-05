function fib(n) {
  var res = {};
  function step(t) {
    if (res[t]) {
      return res[t];
    }

    if (t <= 1) {
      res[t] = t;
    } else {
      res[t] = step(t - 1) + step(t - 2);
    }
    return res[t];
  }
  return step(n);
}

function naiveFib(n) {
  if (n <= 1) {
    return n;
  } else {
    return naiveFib(n - 1) + naiveFib(n - 2);
  }
}

var t0 = performance.now();
console.log(fib(30));
var t1 = performance.now();
console.log(`took ${t1 - t0}ms`);

t0 = performance.now();
console.log(naiveFib(30));
t1 = performance.now();
console.log(`took ${t1 - t0}ms`);
