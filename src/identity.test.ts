import identity from './identity'

describe('#identity', () => {
  it('should return its input', () => {
    expect(identity('a')).toBe('a')
  })
})
