function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error
  }

  return numA + numB;
}

const result1 = add(5, 10); // Correct usage: 15
const result2 = addSafe(5, '10'); // Safe usage: 15
const result3 = addSafe('abc', 10); // Safe usage: 0 (handles NaN)
console.log(result1, result2, result3); // Output: 15 15 0