#include <iostream>
#include <math.h>
#include <vector>

using namespace std;

int binarySearch(const vector<int>& arr, int t){
    int iz = 0;
    int n = arr.size();

    while(iz <= n){
        int mid = floor((iz + n) / 2);

        if(arr[mid] < t){
            iz = mid + 1;
        } else if(arr[mid] > t){
            n = mid - 1;
        } else{
            return arr[mid];
        }
    }

    return -1;
}

int main(){

    vector<int> arr = {1,2,4,5,7,9,12,16,18,20,22,30};

    cout<<binarySearch(arr, 16)<<endl; //16
    cout<<binarySearch(arr, 12)<<endl; //12
    cout<<binarySearch(arr, 23)<<endl; //-1

    return 0;
}
