function isAnagram(text1, text2) {
   if (text1.length !== text2.length) return false;
   return sorTed(text1) === sorTed(text2);
}

function sorTed(text) {
   return text.split("").sort().join("");
}

function isAnagram2(s, t) {
   if (s.length !== t.length) return false;
   let sCount = {};
   let tCount = {};

   for (let i = 0; i < s.length; i++) {
      if (!sCount[s[i]]) sCount[s[i]] = 0;
      sCount[s[i]]++;

      if (!tCount[t[i]]) tCount[t[i]] = 0;
      tCount[t[i]]++;
   }

   for (item in sCount) {
      return sCount[item] === tCount[item];
   }

   //    console.log(text1Obj, text2Obj);
}

// console.log(isAnagram("anagram", "magrani"));
console.log(isAnagram2("anagram", "magrana"));
