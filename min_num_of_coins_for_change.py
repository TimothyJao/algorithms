def minNumberOfCoinsForChange(n, denoms, memo = {}):
	num_coins = [float("inf")] * (n+1)
	
	num_coins[0] = 0
	for denom in denoms:
		for i in range(len(num_coins)):
			if denom <= i:
				num_coins[i] = min(num_coins[i], num_coins[i-denom] + 1)
	
	if num_coins[n] != float("inf"):
		return num_coins[n]
	else:
		return -1