// const set = new Set()

// containsDuplicate.map(num => {
//     if(set.has(num)) {
//         return true
//     } else {
//         continue
//     }
//     set.add(num)
// })


const set = new Set()

function isAnagram(s, t) {

    set.add(s)
    if(set.has(t)) {
        return true
    } else {
        return false
    }
}
