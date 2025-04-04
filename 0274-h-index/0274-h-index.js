/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    // n번째로 많이 인용된 논문이 최소 n번 이상 인용 되었는가?

    const sorted = citations.sort((a, b) => b - a);

    for (let i = 1; i < sorted.length + 1; i++) {
        if (sorted[i - 1] < i) return i - 1
    }

    return sorted.length
};