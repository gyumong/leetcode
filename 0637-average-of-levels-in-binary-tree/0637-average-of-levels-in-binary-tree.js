/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) return []
    const result = []
    const queue = [root];

    while (queue.length > 0) {
        const level = []
        let temp = 0;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            level.push(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        for (let item of level) {
            temp += item
        }
        result.push(temp / level.length);
        temp = 0;

    }
    return result
};