/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder.length || !postorder.length) return null
    let rootVal = postorder[postorder.length - 1]
    let root = new TreeNode(rootVal)


    let mid = inorder.indexOf(rootVal);
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
    root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, postorder.length - 1))

    return root
};