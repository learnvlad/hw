const { runTests } = require('./runTests')

function isPrime(p, primes) {
  for (let i = 0; primes[i] * primes[i] <= p; i++) {
    if (p % primes[i] === 0) {
      return false
    }
  }

  return true
}

function countOfPrimes(n) {
  if(n == 1) return 0
  const primes = [2]
  let count = 1
  for (let p = 3; p <= n; p += 2) {
    if (isPrime(p, primes)) {
      primes[count] = p
      count++
    }
  }

  return count
}

runTests(countOfPrimes)
