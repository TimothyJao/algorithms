class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        current_node = self
        while True:
			if value < current_node.value:
				if not current_node.left:
					current_node.left = BST(value)
					break
				else:
					current_node = current_node.left
			else:
				if not current_node.right:
					current_node.right = BST(value)
					break
				else:
					current_node = current_node.right
		
		return self

    def contains(self, value):
        current_node = self
		while current_node:
			if value < current_node.value:
				current_node = current_node.left
			elif value > current_node.value:
				current_node = current_node.right
			else:
				return True
		
		return False

    def remove(self, value, parent = None):
		current_node = self
		while current_node:
			if value < current_node.value:
				parent = current_node
				current_node = current_node.left
			elif value > current_node.value:
				parent = current_node
				current_node = current_node.right
			else:
				if current_node.left and current_node.right:
					current_node.value = current_node.right.get_min()
					current_node.right.remove(current_node.value, current_node)
				elif not parent:
					if current_node.left:
						current_node.value = current_node.left.value
						current_node.right = current_node.left.right
						current_node.left = current_node.left.left
					elif current_node.right:
						current_node.value = current_node.right.value
						current_node.left = current_node.right.left
						current_node.right = current_node.right.right
					else:
						current_node.value = None
				elif parent.left == current_node:
					parent.left = current_node.left if current_node.left else current_node.right
				elif parent.right == current_node:
					parent.right = current_node.left if current_node.left else current_node.left
				break
		return self
	
	def get_min(self):
		current_node = self
		while current_node.left:
			current_node = current_node.left
		return current_node.value