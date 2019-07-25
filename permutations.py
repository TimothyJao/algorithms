def getPermutations(array):
    permutations = []
    permutationsHelper(0, array, permutations)
    return permutations

def permutationsHelper(i, array, permutations):
    if i == len(array)-1:
        permutations.append(array[:])
    else:
        for j in range(i, len(array)):
            array[i], array[j] = array[j], array[i]
            permutationsHelper(i+1, array,permutations)
            array[j], array[i] = array[i], array[j]
        