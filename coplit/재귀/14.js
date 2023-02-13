function unpackGiftbox(giftBox, wish) {
  for (el of giftBox) {
    if (Array.isArray(el)) {
      unpackGiftbox(el);
    }
    if (el === wish) return true;
  }
  return false;
}
