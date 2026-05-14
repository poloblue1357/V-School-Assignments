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




function r(s, t) {

    const map = new Map()

    

}
console.log(r('note', 'magazine'))