const { runTests } = require('./runTests')

function pow(a, n) {

  if (n === 0) return 1

  let pow = 1
  let p = a

  for (let i = 0; i < n; i++) {
    if (pow * 2 > n) break
    p *= p
    pow *= 2
  }

  if (pow < n) for (let i = 0; i < n - pow; i++) p *= a

  return p
}

runTests(pow)
