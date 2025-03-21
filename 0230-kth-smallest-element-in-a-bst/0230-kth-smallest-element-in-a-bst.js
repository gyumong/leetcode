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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = [];
    function inorder(node){
        if (!node) return;
        inorder(node.left)
        stack.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    return stack[k-1]
};