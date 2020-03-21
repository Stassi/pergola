import conditional from './conditional'

test('return the true value when the predicate is satisfied', () => {
  expect(
    conditional({
      predicate: () => true,
      ifFalse: () => 'false condition',
      ifTrue: () => 'true condition',
    })
  ).toBe('true condition')
})

test('return the false value when the predicate is not satisfied', () => {
  expect(
    conditional({
      predicate: () => false,
      ifFalse: () => 'false condition',
      ifTrue: () => 'true condition',
    })
  ).toBe('false condition')
})
