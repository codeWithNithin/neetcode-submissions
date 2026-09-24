class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let first = strs[0];
        let result = "";

        for (let i = 0; i < first.length; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (i >= strs[j].length || strs[j][i] !== first[i]) {
                    return result;
                }
            }

            result += first[i];
        }

        return result;
    }
}
