import head from './head'

describe('#head', () => {
  it('should return the first element of an array', () => {
    expect(head(['a', 'b', 'c'])).toBe('a')
  })
})
