class Solution {
    public int climbStairs(int n) {
        if (n < 2) return n;

        int[] tempS = new int[n];
        tempS[0] = 1;
        tempS[1] = 2;
        
        for (int i = 2; i < n; i++) {
            tempS[i] = tempS[i - 1] + tempS[i - 2];
        }
        return tempS[n-1];
    }
}
