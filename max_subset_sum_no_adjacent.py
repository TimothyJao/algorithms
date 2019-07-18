def maxSubsetSumNoAdjacent(array):
    curr_max = 0
    prev_max = 0
    for i in range(len(array)):
    	temp = curr_max
    	curr_max = max(prev_max + array[i], curr_max)
    	prev_max = temp
	
    return curr_max
