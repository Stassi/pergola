import until from './until'

describe('#until', () => {
  it('should return the looped value once the predicate is satisfied', () => {
    expect(
      until({
        initialValue: { count: 2 },
        predicate: ({ count }) => count === -2,
        transform: ({ count }) => ({ count: count - 1 }),
      }).count
    ).toBe(-2)
  })
})
