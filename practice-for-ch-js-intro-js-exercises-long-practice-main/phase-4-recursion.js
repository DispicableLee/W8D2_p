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

function fibonacci(n) {
    if (n === 1) {
        return [0];
    }else if (n === 2) {
        return [0,1];
    }else if (n === 0) {
        return [];
    }

    let fibo = fibonacci(n-1);
    fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
    console.log(fibo);
    return fibo;
}

console.log(fibonacci(9));

