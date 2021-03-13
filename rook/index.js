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
    ((K << 1n) & noA) | ((K << 2n) & noAB) | ((K << 3n) & noABC) | ((K << 4n) & noABCD) | ((K << 5n) & noABCDE) | ((K << 6n) & noABCDEF) | ((K << 7n) & noABCDEFG) |
    ((K >> 1n) & noH) | ((K >> 2n) & noGH) | ((K >> 3n) & noFGH) | ((K >> 4n) & noEFGH) | ((K >> 5n) & noDEFGH) | ((K >> 6n) & noCDEFGH) | ((K >> 7n) & noBCDEFGH) |
    (K << 8n) | (K << 16n) | (K << 24n) | (K << 32n) | (K << 40n) | (K << 48n) | (K << 56n) |
    (K >> 8n) | (K >> 16n) | (K >> 24n) | (K >> 32n) | (K >> 40n) | (K >> 48n) | (K >> 56n)

  return BigInt.asUintN(64, M)
}

const n = 60n

console.log(getPos(n))

console.log(popcnt(getPos(n)))
