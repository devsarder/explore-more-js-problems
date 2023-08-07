const friends = [
  "abul",
  "babul",
  "kabul",
  "chabul",
  "tabular",
  "abul",
  "babul",
  "kabul",
  "chabul",
];

function removeDuplicates(friends) {
  let unique = [];
  for (let i = 0; i < friends.length; i++) {
    let name = friends[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueFriends = removeDuplicates(friends);
console.log(uniqueFriends);
