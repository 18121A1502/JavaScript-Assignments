function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
    let s=arr.filter(function(item){
        return item%2===0;
    })
    console.log(s);

}
getEven([1,4,5,77,8,90])

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
    //let arr=[]
        var n=3;
        for(var i=0;i<arr.length;i++){
             var n=arr[i]*n;
             console.log(n);
    
        }
    }
multiplyByN([1,3,4,55]))

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
    let arr=[1,3,4,6,7]
    this.n=3
        return arr.pop(n)

}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}