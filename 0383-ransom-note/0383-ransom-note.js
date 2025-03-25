/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const map = new Map()
    for (let i = 0; i < magazine.length; i++) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
    }

    for (let j = 0; j < ransomNote.length; j++) {
        if (!map.has(ransomNote[j]) || map.get(ransomNote[j]) === 0) return false
        map.set(ransomNote[j], map.get(ransomNote[j]) - 1)
    }
    return true
};