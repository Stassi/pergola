import singlyLinkedList from './singlyLinkedList'

describe('singlyLinkedList', () => {
  const listEmpty = singlyLinkedList()
  const listA = listEmpty.insertAtEnd('a')
  const listAB = listA.insertAtEnd('b')
  const listABC = listAB.insertAtEnd('c')
  const listABCDEF = listABC.insertAtEnd('d').insertAtEnd('e').insertAtEnd('f')
  const listABCDEFG = listABCDEF.insertAtEnd('g')

  describe('#clone', () => {
    it('should return a copy of a list', () => {
      const list = listABC.clone()

      expect(list.getNodeAt(0).value()).toBe('a')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(list.getNodeAt(2).value()).toBe('c')

      expect(list.length()).toBe(3)

      expect(listEmpty.clone().length()).toBe(0)
    })
  })

  describe('#concatenate', () => {
    it('should append one linked list to another linked list', () => {
      const list = listABC.concatenate(
        singlyLinkedList().insertAtEnd('d').insertAtEnd('e').insertAtEnd('f')
      )

      expect(list.getNodeAt(0).value()).toBe('a')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(list.getNodeAt(2).value()).toBe('c')
      expect(list.getNodeAt(3).value()).toBe('d')
      expect(list.getNodeAt(4).value()).toBe('e')
      expect(list.getNodeAt(5).value()).toBe('f')
    })
  })

  describe('#create', () => {
    it('should be possible to create a list from a node', () => {
      const list = listABC.create(listABC.getNodeAtStart())

      expect(list.getNodeAt(0).value()).toBe('a')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(list.getNodeAt(2).value()).toBe('c')

      expect(singlyLinkedList().create().length()).toBe(0)
    })
  })

  describe('#findNode', () => {
    it('should return the node containing the given value', () => {
      expect(listABC.findNode('a')?.value()).toBe('a')
      expect(listABC.findNode('b')?.value()).toBe('b')
      expect(listABC.findNode('c')?.value()).toBe('c')

      expect(listABC.findNode('x')).toBe(null)

      expect(() => singlyLinkedList().findNode('x')).toThrow(RangeError)
    })
  })

  describe('#getNodeAt', () => {
    it('should allow values to be retrieved by index', () => {
      expect(listABC.getNodeAt(0).value()).toBe('a')
      expect(listABC.getNodeAt(1).value()).toBe('b')
      expect(listABC.getNodeAt(2).value()).toBe('c')
    })
  })

  describe('#getNodeAtEnd', () => {
    it('should return the last node in the list', () => {
      expect(listABC.getNodeAtEnd().value()).toBe('c')
    })
  })

  describe('#getNodeAtMiddle', () => {
    it('should return the middle node in the list', () => {
      expect(listA.getNodeAtMiddle().value()).toBe('a')
      expect(listAB.getNodeAtMiddle().value()).toBe('b')
      expect(listABC.getNodeAtMiddle().value()).toBe('b')
      expect(listABCDEF.getNodeAtMiddle().value()).toBe('d')
      expect(listABCDEFG.getNodeAtMiddle().value()).toBe('d')
    })
  })

  describe('#getNodeAtStart', () => {
    it('should return the last node in the list', () => {
      expect(listABC.getNodeAtStart().value()).toBe('a')

      expect(() => singlyLinkedList().getNodeAtStart().value()).toThrow(
        RangeError
      )
    })
  })

  describe('#insertAfter', () => {
    it('should insert a value after an index', () => {
      const list = singlyLinkedList()
        .insertAtStart('a')
        .insertAfter({ index: 0, value: 'b' })
        .insertAfter({ index: 1, value: 'c' })
        .insertAfter({ index: 2, value: 'd' })

      expect(list.getNodeAt(0).value()).toBe('a')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(list.getNodeAt(2).value()).toBe('c')
      expect(list.getNodeAt(3).value()).toBe('d')
    })
  })

  describe('#insertAtEnd', () => {
    it('should allow a value to be appended to the end of a list', () => {
      expect(listABC.getNodeAt(0).value()).toBe('a')
      expect(listABC.getNodeAt(1).value()).toBe('b')
      expect(listABC.getNodeAt(2).value()).toBe('c')
    })
  })

  describe('#insertAtStart', () => {
    it('should allow values to be prepended to the list', () => {
      const list = singlyLinkedList()
        .insertAtStart('c')
        .insertAtStart('b')
        .insertAtStart('a')

      expect(list.getNodeAt(0).value()).toBe('a')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(list.getNodeAt(2).value()).toBe('c')
    })
  })

  describe('#isEmpty', () => {
    it('should return true when a list contains one or more nodes', () => {
      expect(listABC.isEmpty()).toBe(false)
    })
  })

  describe('#length', () => {
    it('should return the number of nodes in a list', () => {
      expect(listABC.length()).toBe(3)
    })
  })

  describe('#removeAfter', () => {
    it('should remove a value after an index', () => {
      const list = listABC.insertAtEnd('d').removeAfter(1)

      expect(list.getNodeAt(0).value()).toBe('a')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(list.getNodeAt(2).value()).toBe('d')
    })
  })

  describe('#removeAtEnd', () => {
    it('should remove the value at the end of a list', () => {
      const list = listABC.removeAtEnd()

      expect(list.getNodeAt(0).value()).toBe('a')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(() => list.getNodeAt(2).value()).toThrow(RangeError)
    })
  })

  describe('#removeAtStart', () => {
    it('should remove the head node', () => {
      const list = listABC.removeAtStart()

      expect(list.getNodeAt(0).value()).toBe('b')
      expect(list.getNodeAt(1).value()).toBe('c')

      expect(() => singlyLinkedList().removeAtStart()).toThrow(RangeError)
    })
  })

  describe('#reverse', () => {
    it('should reverse the order of nodes in a list', () => {
      const list = listABC.reverse()

      expect(list.getNodeAt(0).value()).toBe('c')
      expect(list.getNodeAt(1).value()).toBe('b')
      expect(list.getNodeAt(2).value()).toBe('a')
    })
  })

  describe('#sliceAfter', () => {
    it('should slice a list at a given index', () => {
      const [left, right] = listABC.insertAtEnd('d').sliceAfter(2)

      expect(left.getNodeAt(0).value()).toBe('a')
      expect(left.getNodeAt(1).value()).toBe('b')
      expect(left.getNodeAt(2).value()).toBe('c')
      expect(right.getNodeAt(0).value()).toBe('d')

      expect(() => listABC.sliceAfter(10)).toThrow(RangeError)
    })
  })
})
