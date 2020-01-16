var copyRandomList = function (head) {
    if (!head) { return head }

    let ptr = head;

    while (ptr) {
        let newNode = new Node(ptr.val, null, null)

        newNode.next = ptr.next
        ptr.next = newNode
        ptr = newNode.next
    }

    ptr = head;

    while (ptr) {
        if (ptr.random) { ptr.next.random = ptr.random.next }
        else { ptr.next.random = null }

        ptr = ptr.next.next
    }

    let ptrOldList = head
    let ptrNewList = head.next
    let headOld = head.next

    while (ptrOldList) {
        ptrOldList.next = ptrOldList.next.next;
        if (ptrNewList.next) { ptrNewList.next = ptrNewList.next.next }
        else { ptrNewList.next = null }
        ptrOldList = ptrOldList.next
        ptrNewList = ptrNewList.next
    }

    return headOld

};