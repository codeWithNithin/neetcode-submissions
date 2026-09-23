class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];

            if (map[current]) {
                map[current]++;
            } else {
                map[current] = 1;
            }
        }

        for (let key in map) {
            if (map[key] > nums.length / 2) {
                return key;
            }
        }
    }
}
