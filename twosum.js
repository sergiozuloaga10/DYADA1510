function twoSum(arr, t){
    const index = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const complement = t - element;
        
        if (index[complement] !== undefined) {
            return [indices[complement], i];
        }
        index[arr[i]] = i;
    }

    return null; // Si no se encuentran índices con la suma igual a "t"
}

console.log(twoSum([3,2,3,5,9,8], 7))