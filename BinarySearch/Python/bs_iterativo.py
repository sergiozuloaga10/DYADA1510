import math as m

arr = [1,2,4,5,7,9,12,16,18,20,22,30]

def binarySearch(arr, t):
    iz = 0
    n = len(arr)
    
    while(iz < n):
        mid = m.floor((iz + n) / 2)
        
        if(arr[mid] < t):
            iz = mid + 1
        elif(arr[mid] > t):
            n = mid - 1
        else:
            return arr[mid]
    
    return -1

print(binarySearch(arr, 12)) #12
print(binarySearch(arr, 20)) #20
print(binarySearch(arr, 23)) #-1            