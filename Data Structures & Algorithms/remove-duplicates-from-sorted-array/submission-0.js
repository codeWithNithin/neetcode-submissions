class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let pointer = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[pointer]) {
                pointer++;
                nums[pointer] = nums[i];
            }
        }

        return pointer + 1
    }
}
