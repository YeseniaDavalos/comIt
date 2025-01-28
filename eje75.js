let n1 = 0;
let n2 = 1;
let count = 0;
const limit = 10;
let output = "";

while (count < limit) {
output += n1 + " ";
let next = n1 + n2;
n1 = n2;
n2 = next;
count++;
}

console.log(output.trim());
