var reorderList = function (head) {
    if (!head || !head.next) return head

    // 1. find the middle node O(n)
    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // 2. reverse from middle
    let newHead = null
    let curr = slow.next
    slow.next = null

    while (curr) {
        const next = curr.next
        curr.next = newHead
        newHead = curr
        curr = next
    }

    // 3. merge mid and head
    let currHead = head
    let currMid = newHead

    while (currHead && currMid) {
        const headNext = currHead.next
        const midNext = currMid.next

        currHead.next = currMid
        currMid.next = headNext

        currHead = headNext
        currMid = midNext
    }

    return head
};