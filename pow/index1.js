const { runTests } = require('./runTests')

function pow(a, n) {

  let p = 1

  for (let i = 0; i < n; i++) p *= a

  return p
}

runTests(pow)
