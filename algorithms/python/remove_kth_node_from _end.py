def removeKthNodeFromEnd(head, k):
    temp = head
    counter = 0
    while head:
    	head = head.next
    	counter += 1
	
    front = counter - k
    head = temp
    prev = head
    while front > 0:
    	prev = head
    	head = head.next
    	front -= 1
	

    if prev != head: 
    	prev.next = head.next
    	head.next = None
	
    else:
    	head.value = head.next.value
    	head.next = head.next.next
	
	
	
