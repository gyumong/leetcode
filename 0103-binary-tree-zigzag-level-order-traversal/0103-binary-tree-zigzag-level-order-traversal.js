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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];

    const result = [];
    const queue = [root];
    let signal = false;

    while (queue.length > 0) {
        let temp = [];
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            temp.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        if (signal) {
            temp.reverse()
        }

        result.push(temp)
        temp = []
        signal = !signal
    }
    return result
};