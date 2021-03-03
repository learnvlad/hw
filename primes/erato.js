const { runTests } = require('./runTests')

function erato(n) {

  const divs = Array.from(new Array(n), () => false)

  let count = 0

  for (let p = 2; p <= n; p++) {

    if (!divs[p]) {
      count++
      for (let i = p * p; i <= n; i += p) {
        divs[i] = true
      }
    }
  }

  return count
}

runTests(erato)
