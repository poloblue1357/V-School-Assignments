// const set = new Set()

// containsDuplicate.map(num => {
//     if(set.has(num)) {
//         return true
//     } else {
//         continue
//     }
//     set.add(num)
// })


// function isAnagram(s, t) {
//     const map = new Map()

//     if(s.length !== t.length) {
//         return false
//     }
    
//     let x = s.split('')
//     for(const char of x) {
//         map.set(char, (map.get(char) || 0 ) + 1)
//     }


//     let y = t.split('')
//     for (const char of t) {
//         if (!map.has(char)) return false;

//         map.set(char, map.get(char) - 1);

//         if (map.get(char) < 0) return false;
//     }
//     return true
// }
// console.log(isAnagram('aab', 'abb'))



// function duplicates(s) {
//     const map = new Map()

//     let x = s.split('')

//     for(const char of x) {
//         map.set(char, (map.get(char) || 0) + 1)
//     }

//     for(const char of x) {
//         if(map.get(char) === 1) {
//             return char
//         }
//     }
//     return -1

// }

// console.log(duplicates('loveleetcode'))




// function repeating(s) {
//     const map = new Map()

//     let x = s.split('')
//     for(const char of x) {
//         map.set(char, (map.get(char) || 0) + 1)
//     }

//     for(const char of x) {
//         if(map.get(char) > 1) {
//             return char
//         }
//     }
//     return -1
// }

// console.log(repeating('aabbcc'))


// function dupes(nums) {
//     const set = new Set()
    
//     for(const num of nums) {
//         if(set.has(num)) {
//             return true
//         } else {
//             set.add(num)
//         }
//     }
//     return false

// }
// console.log(dupes([1, 2, 3, 4]))



// function soloNum(nums) {
//     const set = new Set()

//     for(const num of nums) {
//         if(!set.has(num)) {
//             set.add(num)
//         } else if(set.has(num)) {
//             set.delete(num)
//         }
//     }
//     return [...set][0]
// }
// console.log(soloNum([4, 1, 2, 2, 1]))



// function sequence(nums) {
//     const set = new Set()
//     let count = 0
//     let total = 0
//     let x = nums.sort(function(a, b){return a-b})

//     for(const num of x) {
//         set.add(num)
//     }
    
//     for(const num of set) {
//         if(set.has(num + 1)) {
//             count++
//             continue
//         } else if(!set.has(num + 1)) {
//             if(total > count) {
//                 continue
//             } else {
//                 total = count
//             }
//             count = 0
//             continue
//         }
//     }
//     return total + 1
// }
// console.log(sequence([1,2,3,10,11,12,13]))

// function nearby(nums, k) {
//     const set = new Set()
//     for(const num of nums) {
//         set.add(num)
//     }

//     for(let i = 0; i < k; i++) {
//         if(nums[0] === nums[i + 1]) {
//             return true
//         }
//     }
    
// }
// console.log(nearby([1, 2, 3, 4, 1], 3))

// function nearby(nums, k) {
//     const set = new Set()

//     for (let i = 0; i < nums.length; i++) {
//         if (set.has(nums[i])) {
//             return true
//         }

//         set.add(nums[i])

//         if (set.size > k) {
//             set.delete(nums[i - k])
//         }
//     }

//     return false
// }


// function unique(s) {

//     const map = new Map()
//     let str = s.split("")

//     for(const string of s) {
//         map.set(string, (map.get(string) || 0) + 1)
//     }
//     for(let i = 0; i < str.length; i++) {
//         if(map.get(str[i]) === 1) {
//             return i
//         } else {
//             return -1
//         }
//     }
// }
// console.log(unique("loveleetcode"))


// function anagram(s, t) {

//     const map = new Map()
//     // let x = s.split("") not necessary
//     // let y = t.split("") not necessary
//     if(s.length !== t.length) {
//         return false
//     }

//     for(const str of t) {
//         map.set(str, (map.get(str) || 0) + 1)
//     }
//     for(const char of s) {
//         if(!map.get(char)) {
//             return false
//         }
//         map.set(char, map.get(char) - 1)
//     }
//     return true
// }
// console.log(anagram('anagram', 'nagaram'))

// function dupes(nums, k) {

//     const set = new Set()

//     for(let i = 0; i < nums.length; i++) {

//         if(set.has(nums[i])) {
//             return true
//         }

//         set.add(nums[i])

//         if(set.size > k) {
//             set.delete(nums[i - k])
//         }
//     }
//     return false
// }
// console.log(dupes([1, 2, 3, 1], 3))

// function majority(nums) {

//     const map = new Map()

//     for(const num of nums) {
//         map.set(num, (map.get(num) || 0) + 1)
//     }

//     let maxCount = 0
//     let result = null

//     for(const [num, count] of map) {
//         if(count > maxCount) {
//             maxCount = count
//             result = num
//         }
//     }
//     return result
// }
// console.log(majority([3, 2, 3]))


// function ransom(s, t) {

//     const map = new Map()

//     for(const str of t) {
//         map.set(str, (map.get(str) || 0) + 1)
//     }

//     for(const str of s) {
//         if(!map.get(str)) {
//             return false
//         }

//         map.set(str, map.get(str) - 1)
//     }
//     return true
// }
// console.log(ransom('ransomNote', 'magazine'))


// function unique(s) {

//     const map = new Map()

//     for(const str of s) {
//         map.set(str, (map.get(str) || 0) + 1)
//     }
    
//     for(let i = 0; i < s.length; i++) {
//         if(map.get(s[i]) === 1) {
//             return i
//         } 
//     }
//     return -1
// }
// console.log(unique("loveleetcode"))


// function ana(s, t) {

//     const map = new Map()

//     for(const str of s) {
//         map.set(str, (map.get(str) || 0) + 1)
//     }

//     for(let i = 0; i < t.length; i++) {
//         if(!map.has(t[i])) {
//             return false
//         }
//         map.set(t[i], map.get(t[i]) - 1)
//     }
//     return true
// }
// console.log(ana('anagram', 'nagaram'))




// function r(s, t) {

//     const map = new Map()



// }
// console.log(r('note', 'magazine'))


// 1. Find Number!
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



// /*
//  * Complete the 'findNumber' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY arr
//  *  2. INTEGER k
//  */

// function findNumber(arr, k) {
    
//     const set = new Set()

//     for(const num of arr) {
//         set.add(num)
//     }
//     if(set.has(k)) {
//         return 'YES'
//     } else {
//         return 'NO'
//     }
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arrCount = parseInt(readLine().trim(), 10);

//     let arr = [];

//     for (let i = 0; i < arrCount; i++) {
//         const arrItem = parseInt(readLine().trim(), 10);
//         arr.push(arrItem);
//     }

//     const k = parseInt(readLine().trim(), 10);

//     const result = findNumber(arr, k);

//     ws.write(result + '\n');

//     ws.end();
// }





// // 2. Odd Numbers!

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



// /*
//  * Complete the 'oddNumbers' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER l
//  *  2. INTEGER r
//  */

// function oddNumbers(l, r) {
    
//     let array = []
    
//     for(let i = l; i <= r; i++) {
//         if(i % 2 === 1) {
//             array.push(i)
//         }
//     }
//     return array
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const l = parseInt(readLine().trim(), 10);

//     const r = parseInt(readLine().trim(), 10);

//     const result = oddNumbers(l, r);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }




// function betterCompression(s) {

//     let currentLetter
//     let currentNumber = 0
//     let array = []

//     for(let i = 0; i < s.length; i++) {

//         if(isNaN(s[i])) {
//             currentLetter = s[i]
//         } else {
//             currentNumber = s[i]
//         }
//     }
//     console.log(array)
// }
// console.log(betterCompression("a3c9b2c1"))

// function betterCompression(s) {
//     let map = {};
//     let i = 0;

//     while (i < s.length) {
//         let letter = s[i];
//         i++;

//         let numStr = '';

//         while (i < s.length && !isNaN(s[i])) {
//             numStr += s[i];
//             i++;
//         }

//         map[letter] = (map[letter] || 0) + Number(numStr);
//     }

//     return Object.keys(map)
//         .sort()
//         .map(k => k + map[k])
//         .join('');
// }

// console.log(betterCompression("a3c9b2c1")); // a3b2c10


// function compose(functions) {

//     return function(x) {
        
//         let result = x
//         for(let i = functions.length - 1; i >= 0; i--) { 
//             result = functions[i](result)
//         }
        
//     }
// }
// compose(x)

// function twoSum(nums, target) {

//     for(let i = 0; i < nums.length; i++) {
//         let y = []
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 y.push(i, j)
//                 return y
//             }
//         }
//     }
// };
// console.log(twoSum([3,2,4], 9))

// function isPalindrome(x) {
//     let y = x.toString()
//     let z = y.split('').reverse().join('')
//     if(x === Number(z)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isPalindrome(121))

// function romanToInt(s) {
//     let values = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }

//     let total = 0

//     for(let i = 0; i < s.length; i++) {
//         let current = values[s[i]]
//         let next = values[s[i + 1]]

//         if(current < next) {
//             total -= current
//         } else {
//             total += current
//         }
//     }
//     return total
// }
// console.log(romanToInt("MCMXCIV"))


// function longestCommonPrefix(strs) {
//     let currentString = strs[0];

//     for (let i = 0; i < currentString.length; i++) {
//         let prefix = currentString.slice(0, i + 1);

//         for (let j = 1; j < strs.length; j++) {
//             let nextString = strs[j];

//             if (!nextString.startsWith(prefix)) {
//                 return currentString.slice(0, i);
//             }
//         }
//     }

//     return currentString;
// }
// console.log(longestCommonPrefix(["flower","flow","flight"]))


// function isValid(s) {
        
//     let arr = s.split('')
//     let x = true

//     while(x) {
//         for(let i = 0; i < arr.length; i++) {
    
//             if(arr[i] === '(' && arr[i + 1] === ')') {
//                 arr.splice(i, 1)
//                 arr.splice(i, 1)
//                 break
//             } else if(arr[i] === '{' && arr[i + 1] === '}') {
//                 arr.splice(i, 1)
//                 arr.splice(i, 1)
//                 break
//             } else if(arr[i] === '[' && arr[i + 1] === ']') {
//                 arr.splice(i, 1)
//                 arr.splice(i, 1)
//                 break
//             } else {
//                 x = false
//             }
//         }
//     }
//     if(arr.length === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isValid("()[]{}"))


// function isValid(s) {
//     const stack = [];

//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     for (let char of s) {
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char);
//         } else {
//             if (stack.pop() !== map[char]) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }

// console.log(isValid("([)]")); 

// function isValid(s) {
    // const stack = [];
    // const map = {
    //     '(': ')',
    //     '{': '}',
    //     '[': ']'
    // };

    // for (let char of s) {
    //     // If it's an opening bracket, push its matching closer to the stack
    //     if (map[char]) {
    //         stack.push(map[char]);
    //     } 
    //     // If it's a closing bracket, it MUST match the one popped from the stack
    //     else if (stack.pop() !== char) {
    //         return false;
    //     }
    // }

    // return stack.length === 0;
// }

// function mergeTwoLists(list1, list2) {
//     // 1. Create a dummy node to hold the start of our new list
//     let dummy = new ListNode(-1);
//     // 2. 'tail' will track the end of our growing merged list
//     let tail = dummy;
    
//     // 3. Loop while BOTH lists still have nodes to compare
//     while (list1 !== null && list2 !== null) {
//         if (list1.val <= list2.val) {
//             tail.next = list1;  // Connect tail to list1's current node
//             list1 = list1.next; // Move list1's head forward
//         } else {
//             tail.next = list2;  // Connect tail to list2's current node
//             list2 = list2.next; // Move list2's head forward
//         }
//         tail = tail.next;       // Move our tail forward
//     }
    
//     // 4. If one list runs out of nodes, hook up the remainder of the other list
//     if (list1 !== null) {
//         tail.next = list1;
//     } else {
//         tail.next = list2;
//     }
    
//     // 5. The actual merged list starts *after* the dummy node
//     return dummy.next;
// }
// console.log(mergeTwoLists([1,2,4], [1,3,4]))


// function removeDuplicates(nums) {

//     for(let i = nums.length - 1; i > 0; i--) {
//         if(nums[i] === nums[i - 1]) {
//             nums.splice(i, 1)
//         }
//     }
// }
// console.log(removeDuplicates([1,1,2]))

// function removeElement(nums, val) {

//     for(let i = nums.length - 1; i >= 0; i--) {
//         if(nums[i] === val) {
//             nums.splice(i, 1)
//         }
//     }
// }
// console.log(removeElement([3,2,2,3]))


// function strStr(haystack, needle) {
//     if(haystack.includes(needle)) {
//         return haystack.indexOf(needle)
//     } else {
//         return -1
//     }
// }
// console.log(strStr('leetcode', 'leeto'))


// function searchInsert(nums, target) {
//     if(!nums.indexOf(target)) {
//         for(let i = nums.length - 1; i > 0; i--) {
//             if(nums[i] < target) {
//                 return i + 1
//             }
//         }
//     }
//     return nums.indexOf(target)
// }

// function searchInsert(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         // Find the middle index
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) {
//             return mid; // Target found!
//         } else if (nums[mid] < target) {
//             left = mid + 1; // Target is in the right half
//         } else {
//             right = mid - 1; // Target is in the left half
//         }
//     }

//     // If we exit the loop, 'left' is exactly where the target should be inserted
//     return left;
// }
// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1, 3, 5, 6], 2))


// function lengthOfLastWord(s) {
//     let a = s.trim()
//     let x = a.split(" ")
//     let y = x.length
//     let z = x[y - 1]
//     return z.length
// }
// console.log(lengthOfLastWord("   fly me   to   the moon  "))


// function plusOne(digits) {

//     let x = digits.join("")
//     let y = BigInt(x) + 1n
//     let z = y.toString()
//     let a = z.split("")
//     let b = a.map(num => Number(num))
//     return b

//     // use the reverse for loop next time for this - more efficient
// }
// console.log(plusOne([1,2,3]))

// function addBinary(a, b) {
//     let num = BigInt("0b" + a) + BigInt("0b" + b)
//     let binaryString = num.toString(2); 

//     return binaryString
// }
// console.log(addBinary(11, 1))


// function mySqrt(x) {
//     return Math.floor(Math.sqrt(x))
// }
// console.log(mySqrt(4))

function mySqrt(x) {

    


}
console.log(mySqrt(4))