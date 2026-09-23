/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let current = head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next; // save next node
            current.next = prev; // reverse the link
            prev = current; // move prev forward
            current = next; // move current to original next
        }

        return prev;
    }
}
