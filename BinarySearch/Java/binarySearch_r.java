import java.lang.Math;

public class binarySearch_r{
    public static int binarySearch(int[] arr, int t, int iz, int n){
        if(iz > n){
            return -1;
        }

        int mid = Math.floorDiv((iz + n), 2);

        if(arr[mid] == t){
            return arr[mid];
        }

        if(t > arr[mid]){
            return binarySearch(arr, t, mid+1, n);
        } else{
            return binarySearch(arr, t, iz, mid-1);
        }

    }

    public static void main(String[] args){
        int[] arr = {1,2,4,5,7,9,12,16,18,20,22,30};

        System.out.println(binarySearch(arr, 16, 0, arr.length)); //16
        System.out.println(binarySearch(arr, 12, 0, arr.length)); //12
        System.out.println(binarySearch(arr, 23, 0, arr.length)); //-1

    }
}