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
    
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())
