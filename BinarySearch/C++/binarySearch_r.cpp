#include <iostream>
#include <math.h>
#include <vector>

using namespace std;

int binarySearch(const vector<int>& arr, int t, int iz, int n){
    if(iz>n){
        return -1;
    }

    int mid = floor((iz + n) / 2);

    if(arr[mid] == t){
        return arr[mid];
    }

    if(t > arr[mid]){
        return binarySearch(arr, t, mid+1, n);
    } else{
        return binarySearch(arr, t, iz, mid-1);
    }

}

int main(){
    vector<int> arr = {1,2,4,5,7,9,12,16,18,20,22,30};

    cout<<binarySearch(arr, 16, 0, arr.size())<<endl; //16
    cout<<binarySearch(arr, 12, 0, arr.size())<<endl; //12
    cout<<binarySearch(arr, 23, 0, arr.size())<<endl; //-1

    return 0;
}