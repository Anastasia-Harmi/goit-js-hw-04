function isEnoughCapacity(products, containerSize) {
  let total = 0;
  let productsAll = Object.values(products);
  for (const product of productsAll) {
    total += product;
  }
  if (total <= containerSize) {
    return true;
  } else {
    return false;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
