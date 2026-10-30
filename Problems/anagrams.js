
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = {};

  for (const char of str1) {
    map[char] = (map[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!map[char]) return false;

    map[char]--;
  }

  return true;
}

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("listen", "silenm")); // false
console.log(isAnagrams("aab", "abb"));       // false
