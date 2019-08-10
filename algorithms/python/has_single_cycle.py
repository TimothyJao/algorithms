def hasSingleCycle(array):
	current = 0
	counter = 0
	while counter < len(array):
		if counter > 0 and current == 0: return False
		counter += 1
		current = (current + array[current]) % len(array)
			
	return current == 0
	