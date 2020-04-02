import add from './add'

describe('#add', () => {
  describe('input: 3, 4', () => {
    it('equals 7', () => {
      expect(add([3, 4])).toEqual(7)
    })
  })

  describe('input: 4, 3', () => {
    it('=== 7', () => {
      expect(add([4, 3])).toEqual(7)
    })
  })
})
