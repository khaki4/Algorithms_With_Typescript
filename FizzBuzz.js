/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

for (let i = 1; i < 101; i++) {
  const isFizz = i % 3 === 0;
  const isBuzss = i % 5 === 0;
  let result;
  if (isFizz && isBuzss) {
    result = 'FizzBuzz'
  } else if (isFizz) {
    result ='Fizz';
  } else if (isBuzss) {
    result = 'Buzz';
  } else {
    result = i;
  }
}
