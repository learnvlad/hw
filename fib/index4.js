const { runTests } = require('./runTests')

function MatrixMultiply(a, b) {
  const a0 = a[0] * b[0] + a[1] * b[2]
  const a1 = a[0] * b[1] + a[1] * b[3]
  const a2 = a[2] * b[0] + a[3] * b[2]
  const a3 = a[2] * b[1] + a[3] * b[3]

  return [a0, a1, a2, a3]
}

function fib(n) {
  if(n == 0) return 0

    let p = [1, 1, 1, 0]
    let a = [1, 1, 1, 0]
    n -= 2

    while(n) {
      if(n % 2 === 1) p = MatrixMultiply(p, a)

      a = MatrixMultiply(a, a)
      n /= 2
      n = n ^ 0
    }

    return p[0]
}

runTests(fib)
