// Removes elements from an array
// if necessary insert new elements in their place
// returning the deleted elements
// will change the original array
// first parameter defines the starting index and second parameter counts the number of elements to be deleted;
// third parameter we can insert new elements into the array;

const friends = [12, 45, 32, 36, 39, 56, 60, 85];


const partial = friends.splice(4, 4, 30, 30, 30, 35, 40, 100);

// console.log(partial);
console.log(friends)
