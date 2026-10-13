/* Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

For example 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
should return false.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
should return true. 
*/

function containsCommonItem(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        return true;
      }
    }
  }
  return false;
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

const result = containsCommonItem(array1, array2); // should return true
console.log(`Para o array que possui elementos iguais: ${result}`);

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "i"];
const result2 = containsCommonItem(array3, array4); // should return true
console.log(`Para o array que possui elementos diferentes: ${result2}`);
