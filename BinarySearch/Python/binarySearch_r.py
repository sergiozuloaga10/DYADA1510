import math as m

arr = [1,2,4,5,7,9,12,16,18,20,22,30]

def binarySearch(arr, t, iz=0, n=len(arr)-1):
    if(iz>n):
        return -1
    
    mid = m.floor((iz + n) / 2)
    
    if(arr[mid] == t):
        return arr[mid]
    
    if(t > arr[mid]):
        return binarySearch(arr, t, mid+1, n)
    else:
        return binarySearch(arr, t, iz, mid-1)
    
print(binarySearch(arr, 12)) #12
print(binarySearch(arr, 20)) #20
print(binarySearch(arr, 23)) #-1
    