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
 * @return {number}
 */
var sumNumbers = function (root) {

    function dfs(node, sum) {
        if (!node) return 0;

        let temp = sum * 10 + node.val;
        if (!node.left && !node.right) return temp;
        return dfs(node.left, temp) + dfs(node.right, temp)
    }

    return dfs(root, 0)

};