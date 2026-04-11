class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = {}
        for (let elem of nums){
            if(!seen[elem]) seen[elem] = true
            else return true
        }
        return false
    }
}
