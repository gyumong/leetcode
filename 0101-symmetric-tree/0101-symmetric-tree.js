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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true
    return isSame(root.left, root.right)
};

function isSame(i, j) {
    if (!i && !j) return true
    if (!i || !j || i.val !== j.val) return false
    return isSame(i.left, j.right) && isSame(j.left, i.right)
}