class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = [];
        if (n===0) return 0;
        if (n===1) return 1;
        dp[1] = 1;
        dp[2] = 2;
        //formula: dp[i] = dp[i-1] + dp[i-2]
        for(let i = 3; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
}
