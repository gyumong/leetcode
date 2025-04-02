/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const map = new Map()


    const pt = pattern.split("")
    const st = s.split(" ")

    const set = new Set(st)

    for (let i = 0; i < pt.length; i++) {
        if (!map.has(pt[i]) || map.get(pt[i]) === st[i]) { map.set(pt[i], st[i]) }
        else {
            return false
        }
    }
    console.log(map.size, set.size, set)
    if (map.size !== set.size || pt.length !== st.length) return false

    return true

};