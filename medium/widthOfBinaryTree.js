let root = [1,3,2,5,null,null,9,6,null,7];

const widthOfBinaryTree = root => {
    let tree = [], index = 0, flag = 0, maxWidth = 0;

    while(1) {
        if(index + Math.pow(2, flag) >= root.length) {
            let array = [];

            for(let i = index; i < root.length; i++) {
                array.push(root[i]);
            }
            tree.push(array);
            break;
        } else {
            let array = [];
            for(let i = index; i < index + Math.pow(2, flag); i++) {
                array.push(root[i]);
            }
            tree.push(array);
            index += Math.pow(2, flag);
            flag ++;
        }
    }

    for(let i = 0; i < tree.length; i++) {
        if(tree[i].length > maxWidth) {
            maxWidth = tree[i].length;
        }
    }

    return maxWidth;
}

console.log(widthOfBinaryTree(root));