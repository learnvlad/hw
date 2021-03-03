const { runTests } = require('./runTests')

function isPrime(p) {
  if(p === 2) return true
  if(p % 2 === 0) return false
  for (let d = 3; d*d <= p; d+=2) {
    if (p % d === 0) {
      return false
    }
  }

  return true
}

function countOfPrimes(n) {
  let count = 0
  for (let p = 2; p <= n; p++) {
    if (isPrime(p)) {
      count++
    }
  }

  return count
}

runTests(countOfPrimes)
