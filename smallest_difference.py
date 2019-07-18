def smallestDifference(arrayOne, arrayTwo):
    arrayOne = sorted(arrayOne)
	arrayTwo = sorted(arrayTwo)
	idx_one = 0
	idx_two = 0
	smallest =float("inf")
	current = float("inf")
	smallest_pair = []
	
	while idx_one < len(arrayOne) and idx_two < len(arrayTwo):
		first_num = arrayOne[idx_one]
		second_num = arrayTwo[idx_two]
		if first_num < second_num:
			current = second_num - first_num
			idx_one += 1
		elif first_num > second_num:
			current = first_num - second_num
			idx_two += 1
		else:
			return [first_num, second_num]
		
		if smallest > current:
			smallest_pair = [first_num, second_num]
			smallest = current
	
	return smallest_pair
		