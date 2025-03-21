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
var isValidBST = function (root) {
    let prev = null;
    let isValid = true
    function inorder(node) {
        if (!node) return true;

        inorder(node.left)
        if (prev !== null && prev >= node.val) {
            isValid = false
        }
        prev = node.val

        inorder(node.right)
    }
    inorder(root)
    return isValid
};