function findMatryoshka(matryoshka, size) {
  if (Object.keys(matryoshka).length === 0) return false;
  if (matryoshka.size === size) return true;
  if (matryoshka.matryoshka === null) return false;
  return findMatryoshka(matryoshka.matryoshka, size);
}

function findMatryoshka(matryoshka, size) {
  // recursive case
  if (matryoshka.size === size) {
    return true;
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }

  // base case
  return false;
}
