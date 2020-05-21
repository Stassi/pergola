import singlyLinkedListNode, {
  NullableSinglyLinkedListNode,
  SinglyLinkedListNode,
} from './singlyLinkedListNode'
import increment from '../../increment'
import strictEqual from '../../strictEqual'

/**
 * @callback Clone
 * @return {SinglyLinkedList}
 */
type Clone = () => SinglyLinkedList

/**
 * @callback Concatenate
 * @param {SinglyLinkedList} list
 * @return {SinglyLinkedList}
 */
type Concatenate = (list: SinglyLinkedList) => SinglyLinkedList

/**
 * @callback Create
 * @param {NullableSinglyLinkedListNode} head
 * @return {SinglyLinkedList}
 */
type Create = (head?: NullableSinglyLinkedListNode) => SinglyLinkedList

type DualSinglyLinkedList = [SinglyLinkedList, SinglyLinkedList]

/**
 * @callback FindNode
 * @param {*} value
 * @return {NullableSinglyLinkedListNode}
 */
type FindNode = (value: any) => NullableSinglyLinkedListNode

/**
 * @callback GetNodeAt
 * @param {number} index
 * @return {SinglyLinkedListNode}
 */
type GetNodeAt = (index: number) => SinglyLinkedListNode

/**
 * @callback GetNodeAtEnd
 * @return {SinglyLinkedListNode}
 */
type GetNodeAtEnd = () => SinglyLinkedListNode

/**
 * @callback GetNodeAtMiddle
 * @return {SinglyLinkedListNode}
 */
type GetNodeAtMiddle = () => SinglyLinkedListNode

/**
 * @callback GetNodeAtStart
 * @return {SinglyLinkedListNode}
 */
type GetNodeAtStart = () => SinglyLinkedListNode

/**
 * @callback InsertAfter
 * @param {InsertAfterProps} props
 * @return {SinglyLinkedList}
 */
type InsertAfter = (props: InsertAfterProps) => SinglyLinkedList

/**
 * @callback InsertAtEnd
 * @param {*} value
 * @return {SinglyLinkedList}
 */
type InsertAtEnd = (value: any) => SinglyLinkedList

/**
 * @callback InsertAtStart
 * @param {*} value
 * @return {SinglyLinkedList}
 */
type InsertAtStart = (value: any) => SinglyLinkedList

/**
 * @callback IsEmpty
 * @return {boolean}
 */
type IsEmpty = () => boolean

/**
 * @callback Length
 * @return {number}
 */
type Length = () => number

/**
 * @callback RemoveAfter
 * @param {number} index
 * @return {SinglyLinkedList}
 */
type RemoveAfter = (index: number) => SinglyLinkedList

/**
 * @callback RemoveAtEnd
 * @return {SinglyLinkedList}
 */
type RemoveAtEnd = () => SinglyLinkedList

/**
 * @callback RemoveAtStart
 * @return {SinglyLinkedList}
 */
type RemoveAtStart = () => SinglyLinkedList

/**
 * @callback Reverse
 * @return {SinglyLinkedList}
 */
type Reverse = () => SinglyLinkedList

/**
 * @callback SliceAfter
 * @param {number} index
 * @return {SinglyLinkedList[]}
 */
type SliceAfter = (index: number) => DualSinglyLinkedList

/**
 * @interface CountLength
 * @property {number} [count]
 * @property {SinglyLinkedListNode} node
 */
interface CountLength {
  count?: number
  node: SinglyLinkedListNode
}

/**
 * @interface FindMiddle
 * @property {NullableSinglyLinkedListNode} [fastNode]
 * @property {SinglyLinkedListNode} node
 */
interface FindMiddle {
  fastNode?: NullableSinglyLinkedListNode
  node: SinglyLinkedListNode
}

/**
 * @interface FindValue
 * @property {SinglyLinkedListNode} node
 * @property {*} value
 */
interface FindValue {
  node: SinglyLinkedListNode
  value: any
}

/**
 * @interface InsertAfterProps
 * @property {number} index
 * @property {*} value
 */
interface InsertAfterProps {
  index: number
  value: any
}

/**
 * @interface ReverseNodes
 * @property {SinglyLinkedListNode} node
 * @property {NullableSinglyLinkedListNode} [prevNode]
 */
interface ReverseNodes {
  node: SinglyLinkedListNode
  prevNode?: NullableSinglyLinkedListNode
}

/**
 * @interface SinglyLinkedList
 * @property {Clone} clone
 * @property {Concatenate} concatenate
 * @property {Create} create
 * @property {FindNode} findNode
 * @property {GetNodeAt} getNodeAt
 * @property {GetNodeAtEnd} getNodeAtEnd
 * @property {GetNodeAtMiddle} getNodeAtMiddle
 * @property {GetNodeAtStart} getNodeAtStart
 * @property {InsertAfter} insertAfter
 * @property {InsertAtEnd} insertAtEnd
 * @property {InsertAtStart} insertAtStart
 * @property {Length} length
 * @property {RemoveAfter} removeAfter
 * @property {RemoveAtEnd} removeAtEnd
 * @property {RemoveAtStart} removeAtStart
 * @property {Reverse} reverse
 * @property {SliceAfter} sliceAfter
 */
interface SinglyLinkedList {
  clone: Clone
  create: Create
  concatenate: Concatenate
  findNode: FindNode
  getNodeAt: GetNodeAt
  getNodeAtEnd: GetNodeAtEnd
  getNodeAtMiddle: GetNodeAtMiddle
  getNodeAtStart: GetNodeAtStart
  insertAfter: InsertAfter
  insertAtEnd: InsertAtEnd
  insertAtStart: InsertAtStart
  isEmpty: IsEmpty
  length: Length
  removeAfter: RemoveAfter
  removeAtEnd: RemoveAtEnd
  removeAtStart: RemoveAtStart
  reverse: Reverse
  sliceAfter: SliceAfter
}

/**
 * @interface SinglyLinkedListParams
 * @property {NullableSinglyLinkedListNode} head
 */
interface SinglyLinkedListParams {
  head?: NullableSinglyLinkedListNode
}

/**
 * @interface @SplitNodes
 * @property {number} [count]
 * @property {number} index
 * @property {SinglyLinkedList} origin
 * @property {SinglyLinkedList} target
 */
interface SplitNodes {
  count?: number
  index: number
  origin: SinglyLinkedList
  target: SinglyLinkedList
}

/**
 * @interface TransferAllNodes
 * @property {SinglyLinkedList} origin
 * @property {SinglyLinkedList} target
 */
interface TransferAllNodes {
  origin: SinglyLinkedList
  target: SinglyLinkedList
}

/**
 * @interface TraverseNodes
 * @property {number} [count]
 * @property {number} index
 * @property {SinglyLinkedListNode} node
 */
interface TraverseNodes {
  count?: number
  index: number
  node: SinglyLinkedListNode
}

/**
 * @param {CountLength} props
 * @return {CountLength | number}
 */
function countLength({
  count: prevCount = 0,
  node: prevNode,
}: CountLength): CountLength | number {
  const count = increment(prevCount)
  const node = prevNode.next()

  return node
    ? countLength({
        count,
        node,
      })
    : count
}

/**
 * @param {FindMiddle} props
 * @return {FindMiddle | SinglyLinkedListNode}
 */
function findMiddle({
  node,
  fastNode = null,
}: FindMiddle): FindMiddle | SinglyLinkedListNode {
  const next = <SinglyLinkedListNode>node.next()

  if (fastNode) {
    const fastNext = fastNode.next()

    if (fastNext) {
      const nextNext = fastNext.next()
      return nextNext?.next()
        ? findMiddle({ fastNode: nextNext, node: next })
        : next
    } else return node
  } else {
    if (!next) return node

    const nextNext = next.next()

    return nextNext
      ? findMiddle({
          fastNode: nextNext,
          node: next,
        })
      : next
  }
}

/**
 * @param {FindValue} props
 * @return {FindValue | NullableSinglyLinkedListNode}
 */
function findValue({
  node,
  value,
  node: { next, value: currentValue },
}: FindValue): FindValue | NullableSinglyLinkedListNode {
  if (strictEqual([currentValue(), value])) return node

  const nextNode = next()
  return nextNode ? findValue({ value, node: nextNode }) : null
}

/**
 * @param {SplitNodes} props
 * @return {DualSinglyLinkedList | SplitNodes}
 */
function splitNodes({
  index,
  origin,
  target,
  count = 0,
}: SplitNodes): DualSinglyLinkedList | SplitNodes {
  return index < count
    ? [target, origin]
    : splitNodes({
        index,
        count: increment(count),
        origin: origin.removeAtStart(),
        target: target.insertAtEnd(origin.getNodeAtStart().value()),
      })
}

/**
 * @param {ReverseNodes} props
 * @return {SinglyLinkedListNode | ReverseNodes}
 */
function reverseNodes({
  node,
  prevNode = null,
}: ReverseNodes): SinglyLinkedListNode | ReverseNodes {
  return node.next()
    ? reverseNodes({
        node: <SinglyLinkedListNode>node.next(),
        prevNode: node.setNext(prevNode),
      })
    : node.setNext(prevNode)
}

/**
 * @param {TransferAllNodes} props
 * @return {SinglyLinkedList | TransferAllNodes}
 */
function transferAllNodes({
  origin,
  target,
}: TransferAllNodes): SinglyLinkedList | TransferAllNodes {
  return origin.isEmpty()
    ? target
    : transferAllNodes({
        origin: origin.removeAtStart(),
        target: target.insertAtEnd(origin.getNodeAtStart().value()),
      })
}

/**
 * @param {TraverseNodes} props
 * @return {SinglyLinkedListNode | TraverseNodes}
 */
function traverseNodes({
  index,
  node,
  count = 0,
  node: { next },
}: TraverseNodes): SinglyLinkedListNode | TraverseNodes {
  if (strictEqual([count, index])) return node
  const nextNode = next()
  if (!nextNode) throw new RangeError('Index exceeds available nodes.')
  return traverseNodes({ index, count: increment(count), node: nextNode })
}

/**
 * @description Immutable singly linked list.
 * @param {SinglyLinkedListParams} [props={}]
 * @return {SinglyLinkedList}
 */
export default function singlyLinkedList({
  head = null,
}: SinglyLinkedListParams = {}): SinglyLinkedList {
  function clone(): SinglyLinkedList {
    return create(head)
  }

  function create(head: NullableSinglyLinkedListNode = null): SinglyLinkedList {
    return singlyLinkedList({ head })
  }

  function getNodeAt(index: number): SinglyLinkedListNode {
    return <SinglyLinkedListNode>(
      traverseNodes({ index, node: getNodeAtStart() })
    )
  }

  function getNodeAtStart(): SinglyLinkedListNode {
    if (!head) throw new RangeError('No nodes exist.')
    return head
  }

  function isEmpty(): boolean {
    return strictEqual([length(), 0])
  }

  function length(): number {
    return head ? <number>countLength({ node: getNodeAtStart() }) : 0
  }

  function reverse(): SinglyLinkedList {
    return create(
      isEmpty()
        ? null
        : <SinglyLinkedListNode>reverseNodes({ node: getNodeAtStart() })
    )
  }

  function sliceAfter(index: number): DualSinglyLinkedList {
    return <DualSinglyLinkedList>splitNodes({
      index,
      origin: clone(),
      target: create(),
    })
  }

  // TODO: #removeAtMiddle, #partitionSort
  return {
    clone,
    create,
    getNodeAt,
    getNodeAtStart,
    isEmpty,
    length,
    reverse,
    sliceAfter,
    concatenate(list: SinglyLinkedList): SinglyLinkedList {
      return <SinglyLinkedList>transferAllNodes({
        origin: list,
        target: clone(),
      })
    },
    findNode(value: any): NullableSinglyLinkedListNode {
      return <NullableSinglyLinkedListNode>(
        findValue({ value, node: getNodeAtStart() })
      )
    },
    getNodeAtMiddle(): SinglyLinkedListNode {
      return <SinglyLinkedListNode>findMiddle({ node: getNodeAtStart() })
    },
    getNodeAtEnd(): SinglyLinkedListNode {
      return singlyLinkedListNode({ value: reverse().getNodeAtStart().value() })
    },
    insertAfter({ index, value }: InsertAfterProps): SinglyLinkedList {
      const [left, right] = sliceAfter(index)
      return left.insertAtEnd(value).concatenate(right)
    },
    insertAtEnd(value: any): SinglyLinkedList {
      return reverse().insertAtStart(value).reverse()
    },
    insertAtStart(value: any): SinglyLinkedList {
      const node = singlyLinkedListNode({ value })
      return create(isEmpty() ? node : node.setNext(getNodeAtStart()))
    },
    removeAfter(index: number): SinglyLinkedList {
      const [left, right] = sliceAfter(index)
      return left.concatenate(right.removeAtStart())
    },
    removeAtEnd(): SinglyLinkedList {
      return reverse().removeAtStart().reverse()
    },
    removeAtStart(): SinglyLinkedList {
      return create(getNodeAtStart().next())
    },
  }
}
