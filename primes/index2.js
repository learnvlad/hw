const { runTests } = require('./runTests')

function isPrime(p) {
  for(let d = 2; d <= p / 2; d++) {
    if(p % d === 0) {
      return false
    }
  }

  return true
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
