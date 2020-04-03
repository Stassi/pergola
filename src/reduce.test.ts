import reduce from './reduce'

describe('#reduce', () => {
  it('should iteratively transform a set', () => {
    expect(
      reduce({
        collection: 'olleH'.split(''),
        initialValue: '',
        reducer: (accumulator, value) => `${value}${accumulator}`,
      })
    ).toBe('Hello')
  })
})
