/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const minHeep = new MinHeep()
    for (let i = 0; i < nums.length; i++) {
        minHeep.add([i, nums[i]])
        if (minHeep.size() > k) {
            minHeep.poll()
        }
    }


    return minHeep.poll()[1]
};

class MinHeep {
    constructor() {
        this.heep = []
    }

    swap(i, j) {
        [this.heep[i], this.heep[j]] = [this.heep[j], this.heep[i]]
    }

    size() {
        return this.heep.length
    }

    add(value, k) {
        this.heep.push(value)
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.heep.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)
        // 부모노드 존재
        // 새로운 노드가 부모노드보다 작은 경우
        while (this.heep[parentIndex] && this.heep[index][1] < this.heep[parentIndex][1]) {
            // 두노드 값 교체
            // 인덱스를 부모 노드의 인덱스로 변경
            // 새로운 부모 노드의 인덱스 계산
            this.swap(index, parentIndex)
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        }
    }
    getHeep() {
        return this.heep
    }

    poll() {
        if (this.size() === 1) return this.heep.pop()
        const value = this.heep[0]
        this.heep[0] = this.heep.pop()
        this.bubbleDown()
        return value
    }

    bubbleDown() {
        let index = 0;
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;

        while ((this.heep[leftIndex] && this.heep[leftIndex][1] < this.heep[index][1]) || (this.heep[rightIndex] && this.heep[rightIndex][1] < this.heep[index][1])) {
            let smallIndex = leftIndex;
            if (this.heep[rightIndex] && this.heep[rightIndex][1] < this.heep[smallIndex][1]) {
                smallIndex = rightIndex;
            }

            this.swap(index, smallIndex)
            index = smallIndex
            leftIndex = index * 2 + 1
            rightIndex = index * 2 + 2
        }
    }
}