class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const arr = [];
        const slove = (i) => {
            if (nums.length === 1) return nums[0];
            if (i >= nums.length) return 0;
            if (arr[i]) return arr[i];
            arr[i] = Math.max(nums[i] + slove(i + 2), slove(i+1));
            return arr[i];
        }

        return slove(0);
    }
}
