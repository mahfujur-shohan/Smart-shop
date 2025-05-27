export function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}

export function isInCart(array, id) {
  const item = array.find((item) => item.itemId === id);
  if (item) return true;
  else return false;
}
