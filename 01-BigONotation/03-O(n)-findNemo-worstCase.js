const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
  "nemo",
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("runing");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break;
    }
  }
}

findNemo(everyone);
