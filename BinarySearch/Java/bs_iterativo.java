import java.lang.Math;

public class bs_iterativo{
    public static int binarySearch(int[] arr, int t){
        int iz = 0;
        int n = arr.length;

        while(iz <= n){
            int mid = Math.floorDiv((iz + n), 2);

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

    public static void main(String[] args){
        int[] arr = {1,2,4,5,7,9,12,16,18,20,22,30};

        System.out.println(binarySearch(arr, 16)); //16
        System.out.println(binarySearch(arr, 12)); //12
        System.out.println(binarySearch(arr, 23)); //-1

    }
}
