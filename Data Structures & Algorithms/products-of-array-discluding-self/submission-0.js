class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixSum = [],
            suffixSum = [],
            output = [];

        prefixSum[0] = [1];
        suffixSum[nums.length - 1] = [1];

        for (let i = 1; i < nums.length; i++) {
            prefixSum[i] = prefixSum[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffixSum[i] = suffixSum[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            output[i] = prefixSum[i] * suffixSum[i];
        }

        return output;
    }
}
