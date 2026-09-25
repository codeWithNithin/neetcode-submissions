class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a hashmap -> key : []
        let map = {};
        for (let i = 0; i < strs.length; i++) {
            let char = strs[i].split("").sort().join("");

            if (map[char]) {
                map[char].push(strs[i]);
            } else {
                map[char] = [strs[i]];
            }
        }
        return Object.values(map);
    }
}
