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

  let newHead: ListNode | null = null; // 新链表的头部
  let current: ListNode | null = head; // 当前节点
  let next: ListNode | null = null; // 下一个节点

  // 务必画图理解！！！
  while (current) {
    // 保存下一个节点
    next = current.next;
    // 将当前节点的next指向新链表的头部
    current.next = newHead;
    // 更新新链表的头部，即将当前节点作为新链表的头部
    newHead = current;
    // 更新当前节点，目的是为了下一次循环
    current = next;
  }

  return newHead;
}

export {};
