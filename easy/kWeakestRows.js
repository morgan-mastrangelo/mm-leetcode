let mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3;

const kWeakestRows = (mat, k) => {
    let weakOrder = [], answer = [];

    mat.map((arr, index) => {
        weakOrder.push([arr.reduce((sum, num) => sum += num), index]);
    });

    weakOrder.sort((arr1, arr2) => arr1[0] - arr2[0]);

    for(let i = 0; i < k; i++) {
        answer.push(weakOrder[i][1]);
    }

    return answer;
}

console.log(kWeakestRows(mat, k));