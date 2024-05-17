import { nameIsValid, fullTrim, getTotal } from '../src/app'

describe(`user name check`, () => {
  test('check user with valid name', () => {
    const result = nameIsValid('anastasiia')
    expect(result).toBe(true)
  })
  test('check user with two symbols', () => {
    const result = nameIsValid('an')
    expect(result).toBe(true)
  })
  test('check user invalid data', () => {
    const result = nameIsValid('an3')
    expect(result).toBe(false)
  })
})

describe('check space deleting in string', () => {
  test.each([
    { str: 'two thousand seconds later', expected: 'twothousandsecondslater' },
    {
      str: 'when dinosours eating they smile',
      expected: 'whendinosourseatingtheysmile',
    },
    {
      str: 'when i was 3 years old it was 1865 year from Je$  $us Christ',
      expected: 'wheniwas3yearsolditwas1865yearfromJe$$usChrist',
    },
    {
      str: 'he  llo W0   R l d m Y N1 m e 1    S N a s t y a',
      expected: 'helloW0RldmYN1me1SNastya',
    },
  ])('delete spaces in $str string', ({ str, expected }) => {
    const result = fullTrim(str)
    expect(result).toBe(expected)
  })
})

describe('checking order sum', () => {
  test.each([
    { pr: 10, quan: 10, expected: 100 },
    { pr: 10, quan: 1, expected: 10 },
    { pr: 10, quan: 0, expected: 0 },
    { pr: 10, quan: 10, disc: 50, expected: 50 },
    { pr: 10, quan: 1, disc: 80, expected: 2 },
  ])('get order sum for $pr and $quan', ({ pr, quan, disc, expected }) => {
    const result = getTotal([{ price: pr, quantity: quan }], disc)
    expect(result).toBe(expected)
  })
})
