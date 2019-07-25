def balancedBrackets(string):
    stack = []
    for bracket in string:
    	if bracket == "(" or bracket == "[" or bracket == "{":
    		stack.append(bracket)
    	else:
    		if len(stack) == 0: return False
    		pair = stack.pop()
    		if bracket == ")" and pair != "(":
    			return False
    		if bracket == "]" and pair != "[":
    			return False
    		if bracket == "}" and pair != "{":
    			return False
	
    return len(stack) == 0