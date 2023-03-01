/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Function to heapify a subtree (in top-down order) rooted at index i.
    let heapify = (n, i) => {
        // Initialize largest as root 'i'.
        let largest = i; 
        let left = 2 * i + 1;
        let right = 2 * i + 2; 
        // If left child is larger than root.
        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }
        // If right child is larger than largest so far.
        if (right < n && nums[right] > nums[largest]) {
            largest = right;
        }
        // If largest is not root swap root with largest element
        // Recursively heapify the affected sub-tree (i.e. move down).
        if (largest != i) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]];
            heapify(n, largest);
        }
    }

    let heapSort = () => {
        let n = nums.length;
        // Build heap; heapify (top-down) all elements except leaf nodes.
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(n, i);
        }
        // Traverse elements one by one, to move current root to end, and
        for (let i = n - 1; i > 0; i--) {
            [nums[0], nums[i]] = [nums[i], nums[0]];
            // call max heapify on the reduced heap.
            heapify(i, 0);
        }
    }
    
    heapSort();
    return nums;
};