import strictEqual from './strictEqual'

describe('#strictEqual', () => {
  describe('provided 2 equal arguments', () => {
    describe('type: numbers', () => {
      it('should return true', () => {
        expect(strictEqual([4, 4])).toBe(true)
      })
    })

    describe('type: strings', () => {
      it('should return true', () => {
        expect(strictEqual(['y', 'y'])).toBe(true)
      })
    })
  })

  describe('provided 2 unequal arguments', () => {
    describe('type: numbers', () => {
      it('should return false', () => {
        expect(strictEqual([2, 4])).toBe(false)
      })
    })

    describe('type: strings', () => {
      it('should return false', () => {
        expect(strictEqual(['x', 'y'])).toBe(false)
      })
    })
  })
})
