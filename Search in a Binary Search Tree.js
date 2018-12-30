  /**
    * Definition for a binary tree node.
    * function TreeNode(val) {
    *     this.val = val;
    *     this.left = this.right = null;
    * }
    */
    /**
    * @param {TreeNode} root
    * @param {number} val
    * @return {TreeNode}
    */
   var searchBST = function(root, val) {  
    return findSubTree(root,val);
  };

  function findSubTree(root,val){
    if(!root) {
          return null;
      }
      if(root.val === val) {
          return root;
      }
      if(root.val > val) {
          return findSubTree(root.left, val);
      } else if(root.val < val){
          return findSubTree(root.right, val);
      }
  }