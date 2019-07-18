def validateBst(tree, minValue = float("-inf"), maxValue = float("inf")):
    if tree == None: 
        return True
    if tree.value < minValue or tree.value >= maxValue: 
        return False
    return validateBst(tree.left, minValue, tree.value) and validateBst(tree.right, tree.value, maxValue)