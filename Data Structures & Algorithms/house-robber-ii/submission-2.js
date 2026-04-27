class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * option1: using recursion O(2^n)
     * option2: caching caculator in i(th)
     * option3: dynamic
     */
    rob(nums) {
        let arr = [];
        const dsf = (i, flag) => {
            if (nums.length === 1) return nums[0];
            if (i >= nums.length || flag && i === nums.length - 1) {
                return 0;
            }
            
            if (arr[i] !== undefined) return arr[i];
            const case1 = dsf(i+1, flag);
            const case2 = nums[i] + dsf(i+2, flag);
            arr[i] = Math.max(case1, case2);
            return arr[i];
        }
        const res1 = dsf(0, true);
        arr = [];
        const res2 = dsf(1, false);
        return Math.max(res1, res2);
    }
}