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

  const K = 1n << x
  const noA = 0xFeFeFeFeFeFeFeFen
  const noAB = 0xFcFcFcFcFcFcFcFcn
  const noGH = 0x3f3f3f3f3f3f3f3fn
  const noH = 0x7f7f7f7f7f7f7f7fn

  const Kab = noAB & K
  const Kgh = noGH & K
  const Ka = noA & K
  const Kh = noH & K

  const M = (Kab << 6n) | (Kab >> 10n) | (Ka << 15n) | (Ka >> 17n) | (Kh << 17n) | (Kh >> 15n) | (Kgh << 10n) | (Kgh >> 6n)

  const result = BigInt.asUintN(64, M)

  return (popcnt(result).toString() + '\r\n' + result.toString()).trim()
}

runTests(getPos)
