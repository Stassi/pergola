import not from './not'

describe('#not', () => {
  it('should return its logical NOT', () => {
    expect(not(true)).toBe(false)
    expect(not(false)).toBe(true)
  })
})
