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



function sequence(nums) {
    const set = new Set()
    let count = 0
    let total = 0
    let x = nums.sort(function(a, b){return a-b})

    for(const num of x) {
        set.add(num)
    }
    
    for(const num of set) {
        if(set.has(num + 1)) {
            count++
            continue
        } else if(!set.has(num + 1)) {
            if(total > count) {
                continue
            } else {
                total = count
            }
            count = 0
            continue
        }
    }
    return total + 1
}
console.log(sequence([1,2,3,10,11,12,13]))