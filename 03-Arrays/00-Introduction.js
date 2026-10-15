const strings = ["a", "b", "c", "d"];
console.log(`O string original é: ${strings}.`);

// Push
strings.push("e"); // O(1)
console.log(`O string adicionando um elemento push é: ${strings}.`);

strings.push("f", "g", "h");
console.log(`O novo string com novos elementos é: ${strings}`);

// Pop
strings.pop(); // O(1)
console.log(`O string com o último elemento removido é: ${strings}.`);

// Unshift
strings.unshift("x");
console.log(`Adding new caracter at the begginning of the string: ${strings}.`);

// Splice
strings.splice(2, 0, "alien");
console.log(`Adding new caracter at the middle of the string: ${strings}.`);
// O(n/2)
// [ x,a,alien,b,c,d,e,f,g]
