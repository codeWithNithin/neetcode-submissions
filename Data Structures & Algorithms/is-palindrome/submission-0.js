class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0,
            right = s.length - 1;

        while (left < right) {
            // skip symbols from left
            if (!/[a-zA-Z0-9]/.test(s[left])) {
                left++;
                continue;
            }

            // skip symbols from right
            if (!/[a-zA-Z0-9]/.test(s[right])) {
                right--;
                continue;
            }

            // compare
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
