/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++){
            if (strs[j][i] > strs[j + 1][i]) {
                count++
                break
            }
        }
    }
    return count
};

    // var minDeletionSize = function(A) {
    //     let result = 0
    //     const len = A[0].length
    //     for(let i = 0; i < len; i++) {
    //         for(let j = 1; j < A.length; j++){
    //             if(A[j][i] < A[j - 1][i]){
    //                 result += 1
    //                 break
    //             }
    //         }
    //     }
    //     return result
    // };