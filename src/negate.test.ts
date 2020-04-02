import negate from './negate'

describe('#negate', () => {
  describe('input: negative', () => {
    it('should return the positive negation', () => {
      expect(negate(-10)).toEqual(10)
    })
  })

  describe('input: positive', () => {
    it('should return the negative negation', () => {
      expect(negate(10)).toEqual(-10)
    })
  })
})
