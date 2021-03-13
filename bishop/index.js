function popcnt(bits) {
  let cnt = 0n
  while (bits > 0n) {
    cnt++
    bits &= (bits - 1n)
  }

  return cnt
}

function getPos(x) {

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
    ((K << 9n) & noA) | ((K << 18n) & noAB) | ((K << 27n) & noABC) | ((K << 36n) & noABCD) | ((K << 45n) & noABCDE) | ((K << 54n) & noABCDEF) | (K << 63n) |
    ((K >> 9n) & noH) | ((K >> 18n) & noGH) | ((K >> 27n) & noFGH) | ((K >> 36n) & noEFGH) | ((K >> 45n) & noDEFGH) | ((K >> 54n) & noCDEFGH) | (K >> 63n) |
    ((K << 7n) & noH) | ((K << 14n) & noGH) | ((K << 21n) & noFGH) | ((K << 28n) & noEFGH) | ((K << 35n) & noDEFGH) | ((K << 42n) & noCDEFGH) | ((K << 49n) & noBCDEFGH) |
    ((K >> 7n) & noA) | ((K >> 14n) & noAB) | ((K >> 21n) & noABC) | ((K >> 28n) & noABCD) | ((K >> 35n) & noABCDE) | ((K >> 42n) & noABCDEF) | ((K >> 49n) & noABCDEFG)

  return BigInt.asUintN(64, M)
}

const n = 39n

console.log(getPos(n))

console.log(popcnt(getPos(n)))
