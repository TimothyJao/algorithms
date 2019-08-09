def kadanesAlgorithm(array):
    largest = float("-inf")
    current = 0
	
    for i in range(len(array)):
    	current += array[i]
    	largest = max(current, largest)
    	current = max(0, current)
				
    return largest