const fibonacci = function() {
const sequence = [0, 1];
while (sequence.length < 10) {
const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
sequence.push(nextNumber);
}
console.log(sequence.join(', '));
};

fibonacci();
fibonacci();
fibonacci();
