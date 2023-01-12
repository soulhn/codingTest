let users = [
  { name: "Tim", age: 40 },
  { name: "Satya", age: 30 },
  { name: "Sundar", age: 50 },
];

let a = users.reduce((addressBook, user) => {
  let firstLetter = user.name[0];

  if (firstLetter in addressBook) {
    addressBook[firstLetter].push(user);
  } else {
    addressBook[firstLetter] = [];
    addressBook[firstLetter].push(user);
  }
  return addressBook;
}, {});
console.log(a);
