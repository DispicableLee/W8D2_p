function range(start, end) {
    if (start === end) {
        return end;
    }

    let temp = [start];
    return temp.concat(range(start+1, end));

}

console.log(range(0,10));

