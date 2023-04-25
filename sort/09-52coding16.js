// isPalindrome
// Write a recursive function called isPalindrome
// which returns true if the string passed to it is a palindrome(reads the same forward and backward).
// Otherwise it returns false.

const isPalindrome = (string) => {
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  if (string.length <= 1) {
    return true;
  }

  isPalindrome(string.slice(1, -1));
  return true;
};