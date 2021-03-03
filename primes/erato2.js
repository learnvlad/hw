const { runTests } = require('./runTests')

function erato(n) {
  const lp = Array.from(new Array(n + 1), () => 0)

  const pr = []

  let count = 0

  for(let i = 2; i <= n; i++) {
    if(lp[i] === 0) {
      lp[i] = i
      pr.push(i)
      count++
    }

    for(let k = 0; pr[k] <= lp[i] && pr[k] * i <= n; k++) lp[pr[k] * i] = pr[k]
  }

  return count
}

runTests(erato)

// console.log(erato(3))
