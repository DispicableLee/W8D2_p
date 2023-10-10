function range(start, end) {
    if (start === end) {
        return end;
    }

    let temp = [start];
    return temp.concat(range(start+1, end));

}

// console.log(range(0,10));

function sumRec(arr){
    if(arr.length===1){
        return arr[0];
    }

    return arr[0] + sumRec(arr.slice(1)); 
}

// console.log(sumRec([]))

function exponent(base, exp){
    if(exp ===1){
        return base
    }else if(exp<1){
        return 1
    }

    return base * exponent(base, exp-1)

}

// console.log(exponent(5,3)) 

