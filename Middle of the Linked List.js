/**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
  /**
  * @param {ListNode} head
  * @return {ListNode}
  */
  var middleNode = function(head) {
    if(!head) return;
    let slow = head;
    let fast = head;  
    while (fast != null) {
        fast = fast.next;
        if(fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
    }
    return slow;
  };