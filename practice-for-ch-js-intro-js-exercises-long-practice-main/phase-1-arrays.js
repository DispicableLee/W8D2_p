// // Your code here
// function Array(){
//     this.uniq = () =>{
//         return 1

//     }
// }

Array.prototype.uniq = function(){
    let returned = []
    for(let i = 0; i<this.length; i++){
        if(!(returned.includes(this[i]))){
            returned.push(this[i])
        }
    }
    return returned
}

// [1,2,3,4,5] = new Array


// console.log([1,2,3,4,5].uniq())

Array.prototype.twoSum = function(){
    let returned = []
    for(let i = 0; i<this.length; i++){
        for(let j = 0; j<this.length; j++){
            if(j>i && this[i] + this[j]==0){
                returned.push([i, j])
            }
        }
    }
    return returned
}


// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function(){
    const holder = new Array;
    for(let row = 0; row < this.length; row++) {
        let temp = [];
        for(let column = 0; column < this[row].length; column++) {
            temp.push(this[column][row]);
        }
        holder.push(temp);
    }
    return holder;
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())

function say(a){
    console.log(a)
}



Array.prototype.myEach = function(callBack){
    for(let i = 0; i<this.length; i++){
        callBack(this[i])
    }
}

// console.log([1,2,3,4].myEach(say))

function plusOne(e){
    return e+1
}
Array.prototype.myMap = function(callBack){
    let holder = [];
    this.myEach(function(ele, i, arr) {holder.push(callBack(ele))});
    return holder;
}


// console.log([1,2,3,4,5].myMap(plusOne))

Array.prototype.myReduce = function(callBack, optionalValue){
    if(optionalValue===undefined) optionalValue = this[0]
    console.log(optionalValue)
    return optionalValue


}

console.log([1,2,3].myReduce(function(acc, el) {return acc + el}))

