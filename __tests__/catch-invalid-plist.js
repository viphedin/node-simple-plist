const plist = require('../simple-plist')

it('Throws an error on improperly formatted plist', () => {
  function doIt() {
    return plist.readFileSync(`${__dirname}/test-xml1-invalid.plist`)
  }
  expect(doIt).toThrow(/has errors$/)
})

it('returns an empty object when the file is zero bytes', () => {
  const obj = plist.readFileSync(`${__dirname}/test-xml1-invalid-2.plist`)
  expect(obj).toEqual({})
})
