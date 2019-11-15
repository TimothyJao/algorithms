function ListNode(val){
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    let pointer1 = l1;
    let pointer2 = l2;
    let currentNode;
    let newList;
    let carryOver = 0;
    while(pointer1 || pointer2){
        if(pointer1 && pointer2){
            let sum = pointer1.val + pointer2.val + carryOver;
            carryOver = 0;
            if(sum >=10){
                carryOver = 1;
                sum -= 10;
            }
            if(!newList){
                newList = new ListNode(sum);
                currentNode = newList;
            } else{
                currentNode.next = new ListNode(sum);
                currentNode = currentNode.next;
            }
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        } else if(pointer1){
            let sum = pointer1.val + carryOver;
            carryOver = 0;
            if(sum >= 10){
                carryOver = 1;
                sum -= 10;
            }
            currentNode.next = new ListNode(sum);
            currentNode = currentNode.next;
            pointer1 = pointer1.next;
        } else if (pointer2){
            let sum = pointer2.val + carryOver;
            carryOver = 0;
            if(sum >= 10){
                carryOver = 1;
                sum -= 10;
            }
            currentNode.next = new ListNode(sum);
            currentNode = currentNode.next;
            pointer2 = pointer2.next;
        }
    }
    if(carryOver === 1){
        currentNode.next = new ListNode(1);
        currentNode = currentNode.next;
    }
    return newList;
}