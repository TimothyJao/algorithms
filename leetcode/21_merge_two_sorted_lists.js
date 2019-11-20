function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let head;
    let last;

    if (l1.val < l2.val) {
        head = last = l1;
        l1 = l1.next;
    } else {
        head = last = l2;
        l2 = l2.next;
    }

    while (l1 && l2) {
        if (l1.val < l2.val) {
            last.next = l1;
            l1 = l1.next;
        } else {
            last.next = l2;
            l2 = l2.next;
        }
        last = last.next;
    }

    last.next = l1 || l2;
    return head;
}