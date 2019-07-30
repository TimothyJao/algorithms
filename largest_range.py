def largestRange(array):
    largest = []
	best = 0
    hash = {}
    for num in array:
        hash[num] = True
    
    for num in array:
        if not hash[num]:
            continue
        
        hash[num] = False
		length = 1
        low = num - 1
        high = num + 1
		
        while low in hash:
            hash[low] = False
            low -= 1
        	length += 1
        while high in hash:
            hash[high] = False
            high += 1
        	length += 1
        if length > best:
			best = length
			largest = [low+1, high-1]
    
    return largest