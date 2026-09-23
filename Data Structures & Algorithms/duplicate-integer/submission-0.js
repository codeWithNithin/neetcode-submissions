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
                map[current]++;
            } else {
                map[current] = 1;
            }
        }


     for(let key in map) {
      
      if(map[key] > 1) {
        return true;
      }
     }

     return false;

    }
}
