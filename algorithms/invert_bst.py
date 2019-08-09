def invertBinaryTree(tree): 
	if not tree:
		return
	tree.right, tree.left = tree.left, tree.right
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
