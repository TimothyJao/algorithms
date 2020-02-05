var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast) {
        if (fast.next) {
            fast = fast.next.next;
        } else {
            return false;
        }

        slow = slow.next;
        if (slow === fast) return true;
    }
    return false;
};