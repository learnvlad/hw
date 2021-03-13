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
  const noABCDEFG = 9259542123273814144n
  const noABCDEF = 0xc0c0c0c0c0c0c0c0n
  const noABCDE = 0xe0e0e0e0e0e0e0e0n
  const noABCD = 0xf0f0f0f0f0f0f0f0n
  const noABC = 0xf8f8f8f8f8f8f8f8n
  const noAB = 0xFcFcFcFcFcFcFcFcn
  const noA = 0xFeFeFeFeFeFeFeFen

  const noBCDEFGH = 0x101010101010101n
  const noCDEFGH = 0x303030303030303n
  const noDEFGH = 0x707070707070707n
  const noEFGH = 0xf0f0f0f0f0f0f0fn
  const noFGH = 0x1f1f1f1f1f1f1f1fn
  const noGH = 0x3f3f3f3f3f3f3f3fn
  const noH = 0x7f7f7f7f7f7f7f7fn

  const M =
    (K << 8n) | (K << 16n) | (K << 24n) | (K << 32n) | (K << 40n) | (K << 48n) | (K << 56n) |
    (K >> 8n) | (K >> 16n) | (K >> 24n) | (K >> 32n) | (K >> 40n) | (K >> 48n) | (K >> 56n) |
    ((K << 1n) & noA) | ((K << 2n) & noAB) | ((K << 3n) & noABC) | ((K << 4n) & noABCD) | ((K << 5n) & noABCDE) | ((K << 6n) & noABCDEF) | ((K << 7n) & noABCDEFG) |
    ((K >> 1n) & noH) | ((K >> 2n) & noGH) | ((K >> 3n) & noFGH) | ((K >> 4n) & noEFGH) | ((K >> 5n) & noDEFGH) | ((K >> 6n) & noCDEFGH) | ((K >> 7n) & noBCDEFGH) |

    ((K << 9n) & noA) | ((K << 18n) & noAB) | ((K << 27n) & noABC) | ((K << 36n) & noABCD) | ((K << 45n) & noABCDE) | ((K << 54n) & noABCDEF) | (K << 63n) |
    ((K >> 9n) & noH) | ((K >> 18n) & noGH) | ((K >> 27n) & noFGH) | ((K >> 36n) & noEFGH) | ((K >> 45n) & noDEFGH) | ((K >> 54n) & noCDEFGH) | (K >> 63n) |
    ((K << 7n) & noH) | ((K << 14n) & noGH) | ((K << 21n) & noFGH) | ((K << 28n) & noEFGH) | ((K << 35n) & noDEFGH) | ((K << 42n) & noCDEFGH) | ((K << 49n) & noBCDEFGH) |
    ((K >> 7n) & noA) | ((K >> 14n) & noAB) | ((K >> 21n) & noABC) | ((K >> 28n) & noABCD) | ((K >> 35n) & noABCDE) | ((K >> 42n) & noABCDEF) | ((K >> 49n) & noABCDEFG)

  const result =  BigInt.asUintN(64, M)

  return (popcnt(result).toString() + '\r\n' + result.toString()).trim()
}

runTests(getPos)