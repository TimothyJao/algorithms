def threeNumberSum(array, targetSum):
	triplets = []
	array = sorted(array)
	for i in range(len(array) - 2):
		start_idx = i+1
		end_idx = len(array) - 1
		
		while(start_idx < end_idx):
			sum = array[i] + array[start_idx] + array[end_idx]
			if sum == targetSum:
				triplets.append([array[i], array[start_idx], array[end_idx]])
				start_idx += 1
				end_idx -= 1
			elif sum < targetSum:
				start_idx += 1
			elif sum > targetSum:
				end_idx -= 1
	
	return triplets