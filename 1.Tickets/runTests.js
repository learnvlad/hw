const fs = require('fs')
const solution = require('./solution').solution

function runTests() {
  const problem = fs.readFileSync(__dirname + '/problem.txt', 'utf-8')

  console.log('\x1b[36m', '\n\nTask:\n\n' + problem + '\n\n******************************************************\n')

  fs.readdir(__dirname, function (err, filenames) {
    filenames
      .filter(fileName => fileName.match('test') && !fileName.match('out'))
      .sort((a, b) =>
        a.replace('test.', '').replace('.in', '') -
        b.replace('test.', '').replace('.in', '')
      )
      .forEach(function (inputFileName) {
        const inputData = fs.readFileSync(__dirname + '/' + inputFileName, 'utf-8')

        const outputFileName = inputFileName.replace('in', 'out')

        const outputData = fs.readFileSync(__dirname + '/' + outputFileName, 'utf-8')

        process.stdout.write("Process ...")

        expect(solution(inputData.trim()), inputFileName, inputData).toBe(outputData)
      })
  })
}

function expect(data, inputFileName) {
  return ({
    toBe: expectation => {
      const result = data == expectation
      process.stdout.write("\r\x1b[K")
      console.log(
        result ? '\x1b[32m' : '\x1b[31m',
        inputFileName + '     ' + (result ? 'PASSED\n\n' : `FAILED  (${data} doesn't equal ${expectation})\n\n`)
      )
    }
  })
}

runTests()
