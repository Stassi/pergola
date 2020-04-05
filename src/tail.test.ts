import tail from './tail'

describe('#tail', () => {
  it('should return the first element of an array', () => {
    expect(tail(['a', 'b', 'c'])).toEqual(['b', 'c'])
  })
})
