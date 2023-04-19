let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;

const searchMatrix = (matrix, target) => {
    let isExist = false;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === target) {
                isExist = true;
            }
        }
    }

    return isExist;
}

console.log(searchMatrix(matrix, target));