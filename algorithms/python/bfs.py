class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def breadthFirstSearch(self, array):
        
		visited = [self]
		
		while len(visited) != 0:
			node = visited.pop(0)
			array.append(node.name)
			for child in node.children:
				visited.append(child)
		return array