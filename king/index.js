const { runTests } = require('./runTests')

function popcnt(bits) {
  let cnt = 0n
  while (bits > 0n) {
    cnt++
    bits &= (bits - 1n)
  }

  return cnt
}

function getPos(n) {
  const x = BigInt(n)

  const noA = 0xfefefefefefefefen
  const noH = 0x7f7f7f7f7f7f7f7fn
  const K = 1n << x
  const Ka = noA & K
  const Kh = noH & K
  const M =
    (Ka << 7n) | (K << 8n) | (Kh << 9n) |
    (Ka >> 1n) |             (Kh << 1n) |
    (Ka >> 9n) | (K >> 8n) | (Kh >> 7n)

  const result = BigInt.asUintN(64, M)

  return (popcnt(result).toString() + '\r\n' + result.toString()).trim()
}

runTests(getPos)
