class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //1. first check if the both strings have equal length
        if (s.length !== t.length) return false;
        //2. we keep hasmaps for 1 for each strings
        let mapS = {},
            mapT = {};
        // 3. count the frequency for each of the charecters.

        for (let i = 0; i < s.length; i++) {
            let current = s[i];
            mapS[current] = (mapS[current] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            let current = t[i];
            mapT[current] = (mapT[current] || 0) + 1;
        }

        // 4. after counting frequencies
        for (let char in mapS) {
            if (mapS[char] !== mapT[char]) {
                return false;
            }
        }

        return true;
    }
}
