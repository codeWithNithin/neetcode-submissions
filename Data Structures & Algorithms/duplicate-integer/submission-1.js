class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];

            if (map[current]) {
                return true;
            } else {
                map[current] = true;
            }
        }

        return false;
    }
}
