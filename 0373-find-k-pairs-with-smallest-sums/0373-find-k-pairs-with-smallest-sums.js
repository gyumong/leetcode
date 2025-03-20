/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    const minHeep = new MinHeep()
    const result = []
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        minHeep.add([nums1[i] + nums2[0], i, 0])
    }

    while (k > 0 && minHeep.size() > 0) {
        const [sum, i, j] = minHeep.poll()
        result.push([nums1[i], nums2[j]])
        k--

        if (j + 1 < nums2.length) {
            minHeep.add([nums1[i] + nums2[j + 1], i, j + 1])
        }
    }
    return result
};

class MinHeep {
    constructor() {
        this.heep = []
    }

    add(value) {
        this.heep.push(value)
        this.bubbleUp()
    }

    size() {
        return this.heep.length
    }
    bubbleUp() {
        let index = this.heep.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)

        while (
            this.heep[parentIndex] && this.heep[index][0] < this.heep[parentIndex][0]
        ) {
            this.swap(index, parentIndex)
            index = parentIndex
            parentIndex = Math.floor((index -1) /2)

        }
    }

    swap(i, j) {
        [this.heep[i], this.heep[j]] = [this.heep[j], this.heep[i]]
    }

    poll() {
        if (this.heep.length === 0) return null
        if (this.heep.length === 1) return this.heep.pop()

        const value = this.heep[0]
        this.heep[0] = this.heep.pop()
        this.bubbleDown()
        return value
    }

    bubbleDown() {
        let index = 0;
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;

        while (this.heep[leftIndex] && this.heep[leftIndex][0] < this.heep[index][0] || this.heep[rightIndex] && this.heep[rightIndex][0] < this.heep[index][0]) {
            let smallIndex = leftIndex

            if (this.heep[rightIndex] && this.heep[rightIndex][0] < this.heep[smallIndex][0]) {
                smallIndex = rightIndex
            }
            this.swap(index, smallIndex);
            index = smallIndex;
            leftIndex = index * 2 + 1;
            rightIndex = index * 2 + 2;
        }

    }
}