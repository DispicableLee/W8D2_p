Array.prototype.bubbleSort = function() {
    let sorted = true
    while (sorted) {
        sorted = false;
        for (let i=0;i < this.length; i++) {
            let next = i + 1;
            if (this[i] > this[next]) {
                let temp = this[next];
                this[next] = this[i];
                this[i] = temp;
                sorted = true;
            }
        }
    }
    return this
}

// console.log([1,3,5,1,2].bubbleSort())


String.prototype.subStrings = function(){
    let holder = [];
    for(let i = 0; i<this.length; i++){
        for(let j = i+1; j<=this.length; j++){
            holder.push(this.slice(i,j));
        }
    }
    return holder;
}

console.log("hello".subStrings())