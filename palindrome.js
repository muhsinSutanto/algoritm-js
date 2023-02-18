const isPalinddrom = (param) => {
   const str = param;
   const reversStr = str.split("").reverse().join("");

   return reversStr === str;
};

function isPalindrome(str) {
   if (str.length === 1 || !str.length) return false;
   let revStr = [];
   for (let i = str.length; i >= 0; i--) {
      revStr.push(str[i]);
   }

   return revStr.join("") === str;
}

// console.log(isPalinddrom('civic'))

console.log(isPalindrome("civic"));
