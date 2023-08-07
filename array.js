const friends = [13, 12, 1, 5, 1, 515, 14];
const newFriends =[12, 1, 3, 125, 14, 15];
const allFriends = newFriends.concat(friends);
console.log(allFriends);
// console.log(friends.includes(20));
if(friends.indexOf(20) !== -1){
    console.log('hello friends');
}