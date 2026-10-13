function containCommonItens(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "a"];

const result = containCommonItens(arr1, arr2); // should return false
console.log(`Comparando os dois arrays: ${result}.`);
