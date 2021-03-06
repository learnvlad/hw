const fs = require('fs')

function runTests(solution) {
  const problem = fs.readFileSync(__dirname + '/tests/problem.txt', 'utf-8')

  console.log('\x1b[36m', '\n\nTask:\n\n' + problem + '\n\n******************************************************\n')

  fs.readdir(__dirname + '/tests/', function (err, filenames) {
    filenames
      .filter(fileName => fileName.match('test') && !fileName.match('out'))
      .sort((a, b) =>
        a.replace('test.', '').replace('.in', '') -
        b.replace('test.', '').replace('.in', '')
      )
      .forEach(function (inputFileName) {
        const inputData = fs.readFileSync(__dirname + '/tests/' + inputFileName, 'utf-8')

        const preparedInputData = inputData.trim().split('\r\n')

        const outputFileName = inputFileName.replace('in', 'out')

        const outputData = fs.readFileSync(__dirname + '/tests/' + outputFileName, 'utf-8')

        process.stdout.write("Process ...")

        console.time('Time')
        const data = solution(+preparedInputData[0], +preparedInputData[1])
        expect(data, inputFileName, inputData).toBe(outputData)
        console.timeEnd('Time')
        console.log('Input data: ' + preparedInputData)
        console.log('Output data: ' + data)
        console.log('-------------------------------------------------------')
      })
  })
}

function expect(data, inputFileName) {
  return ({
    toBe: expectation => {
      const result = data == expectation
      process.stdout.write("\r\x1b[K")
      console.log(
        result ? '\x1b[32m' : '\x1b[31m', inputFileName + '                       ' + (result ? 'PASSED' : `FAILED  (${data} doesn't equal ${expectation})`)
      )
    }
  })
}

module.exports.runTests = runTests
