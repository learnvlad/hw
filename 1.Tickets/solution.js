/*****************************************************
 */

module.exports.solution = function solution(input) {
  return getLuckyTickets(input)
}

/*****************************************************
 */

function geSumDigits(number) { // функция для получения суммы цифр
  const strRepresentation = number.toString()
  const arrStrings = strRepresentation.split('')

  let sum = 0

  for (let i = 0; i < arrStrings.length; i++) {
    sum += parseInt(arrStrings[i])
  }

  return sum
}

function getLuckyTickets(ticketNumberLength) {
  const preparedTicketNumberLength = ticketNumberLength * 2
  const halfLength = preparedTicketNumberLength / 2
  const maxSize = Math.pow(10, halfLength)

  let result = 0

  for (let i = 0; i < maxSize; i++)
    for (let j = 0; j < maxSize; j++)
      if (geSumDigits(i) === geSumDigits(j)) {
        result++
      }
  return result
}
