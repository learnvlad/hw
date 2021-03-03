const { runTests } = require('./runTests')

function fib(n) {
  if(n == 0) return 0
  const sqrt5 = Math.sqrt(5)
  const gr = (1 + sqrt5) / 2

  return Math.pow(gr, n) / sqrt5 + 0.5
}

runTests(fib)
