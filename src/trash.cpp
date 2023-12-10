class Solution {
public:
    
    vector<int> getGoodIndices(vector<vector<int>>& v, int target) {
        vector<int>ans;
        for(long long i = 0;i<v.size();i++){
            long long a = v[i][0], b = v[i][1],c = v[i][2],m = v[i][3];
            long long aa = pow(a,b);
            long long bb = pow((aa % 10), c);
            if(bb %m == target)ans.push_back(i);
            
        }
        return ans;
    }
};