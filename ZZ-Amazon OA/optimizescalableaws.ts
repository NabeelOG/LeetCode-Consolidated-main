// ### Reconstructed Problem Statement

// Given an array representing the computational powers of servers, you are allowed to perform the following operation any number of times:

// - Choose any contiguous subarray and add a positive integer to **every element** in that subarray.

// The goal is to make the entire array **non-decreasing** (each element is at least as large as the previous one) using these operations, **minimizing the total sum of all values that you add** over all operations.

// #### More Formally

// - Input: An array of integers $$ A, A, ..., A[n-1] $$.
// - Operation: For any interval $$ [l, r] $$ and any positive integer $$ x $$, you can add $$ x $$ to all $$ A[l], A[l+1], ..., A[r] $$.
// - Requirement: After any number of such operations, the array must satisfy $$ A[i] \leq A[i+1] $$ for all $$ 0 \leq i < n-1 $$.
// - Objective: Minimize the **sum of all additions** performed.

// #### Example

// If the input is `[3, 5, 2,ask is to determine the minimal total additions and/or the sequence of operations that will convert this into a non-decreasing array using allowed operations, with the least total sum added.

// If you're looking for how to approach or solve this, let me know and I can walk you through the optimal method!

function incrementaws(s: number[]) {
    let n = s.length;
    let totalsum = 0;

    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) {
            let diff = s[i - 1] - s[i];
            totalsum += diff;
            for (let l = i; l < n; l++) {
                s[l] += diff;
            }
        }
    }
    console.log(totalsum);
    return s;
}

console.log(incrementaws([3, 5, 2, 3]));
