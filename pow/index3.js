const { runTests } = require('./runTests')

function pow(a, n) {
  let p = 1

  while(n) {
    if(n % 2 === 1) p *= a
    a *= a
    n /= 2
    n = n ^ 0
  }

  return p
}

runTests(pow)
