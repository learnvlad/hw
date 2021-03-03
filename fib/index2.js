const { runTests } = require('./runTests')

function fib(n) {
  if(n == 0) return 0

  let f0 = 0
  let f1 = 1
  let f2 = f0 + f1

  for(let i = 2; i < n; i++) {
    f0 = f1
    f1 = f2
    f2 = f0 + f1
  }

  return f2
}

runTests(fib)
