const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "c"];

function containsCommonItem(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

const result = containsCommonItem(array1, array2);
console.log(result);
