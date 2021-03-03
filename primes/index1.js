const { runTests } = require('./runTests')

function isPrime(p) {
  let q = 0
  for(let d = 1; d <= p; d++) {
    if(p % d === 0) {
      q++
    }
  }

  return q === 2
}

function countOfPrimes(n) {
  let count = 0
  for(let p = 2; p <= n; p++) {
    if(isPrime(p)) {
      count++
    }
  }

  return count
}

runTests(countOfPrimes)
