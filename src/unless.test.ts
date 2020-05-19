import unless from './unless'

describe('#unless', () => {
  it('should do nothing if the predicate is satisfied', () => {
    expect(
      unless({
        initialValue: { doNothing: true, payload: 'ok' },
        predicate: ({ doNothing }) => doNothing,
        transform: () => {
          throw new Error('Transformation not allowed.')
        },
      }).payload
    ).toBe('ok')
  })

  it('should return the looped value unless the predicate is satisfied', () => {
    expect(
      unless({
        initialValue: { count: 2 },
        predicate: ({ count }) => count === -2,
        transform: ({ count }) => ({ count: count - 1 }),
      }).count
    ).toBe(-2)
  })
})
