
// Using recursion
function dropElements(array){

    if (array.length <= 0)
    return;

    let n = array[0]; // Doing this because we'll keep removing items from the beginning using array.shift()



    if(func(n)){
        // Output the items left in the array only when the condition is true
        console.log(`Items left: ${array}`)
        return

    }
    else{
        // If the condition is not true, keep removing items from the beginning of the array until it's true, or return an empty array.
        array.shift()
    }

    // Call the function again
    dropElements(array);

 }




 // Function to test condition
let func = function(n){
    if(n >= 3){
        return true;
    }
    else{
        return false;
    }
}





dropElements([1, 2, 3, 4])




// dropElements([1, 2, 3, 4], function(n) {
//     return n >= 3;
// }) 
// // should return [3, 4].

// dropElements([1, 2, 3, 4], function(n) {
//     return n > 5;
// }) 
// //should return [].