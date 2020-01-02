function exist(matrix, word) {
  let wordLength = word.length, i, j;

  word = word.split("");

  function verify(row, col, matrix, path) {
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] !== word[path] || path > wordLength) {
      return false;
    }

    path++;
    matrix[row][col] = '#';

    if (path === wordLength) return true;

    if (verify(row - 1, col, matrix, path)) {
      return true;
    }

    if (verify(row, col + 1, matrix, path)) {
      return true;
    }

    if (verify(row + 1, col, matrix, path)) {
      return true;
    }

    if (verify(row, col - 1, matrix, path)) {
      return true;
    }
    path--;
    matrix[row][col] = word[path];
    return false;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (verify(i, j, matrix, 0)) {
        return true;
      }
    }
  }
  return false;
}