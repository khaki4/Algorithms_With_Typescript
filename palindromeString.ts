/**
 * @module Palindrome solvers
 * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 */
const isPalindrome = (str: string): boolean => {
  const reversed = str.split('').reverse().join('')
  return str === reversed
}


/**
  * Returns true if ANY permutation of the string is a palindrome
  * civic true
  * toot true
  * toto true
  * civil false
  */
const isAnyPermutationPalindrome = (str: string): boolean => {
  if (str.length <= 1) return true
  if (str.charAt(0) !== str.charAt(str.length - 1)) return false
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}

const result0 = isPalindrome('cicicic')
result0
const result1 = isAnyPermutationPalindrome('cicic')
result1
