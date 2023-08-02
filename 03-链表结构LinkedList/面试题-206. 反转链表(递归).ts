/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// https://leetcode.cn/problems/reverse-linked-list/
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return head;

  // 递归到最后一个节点，会返回最后一个节点
  const newHead = reverseList(head.next ?? null);

  // 递归完后到到这里执行的是倒数第二个节点
  const next = head.next; // 保存下一个节点
  next.next = head; // 将下一个节点的next指向当前节点
  head.next = null; // 将当前节点的next指向null
  return newHead; // 返回最后一个节点
}

export {};
