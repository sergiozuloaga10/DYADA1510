function quadrants(x,y){
    if(x > 0){
        if(y > 0){
            return 1;

        } else{
            return 4;

        }
    } else{
        if(y > 0){
            return 2;

        } else{
            return 3;

        }
    }  
}

console.log(quadrants(2, 3)); // 1
console.log(quadrants(-4, 1)); // 2
console.log(quadrants(-2, -5)); // 3
console.log(quadrants(6, -3)); // 4

