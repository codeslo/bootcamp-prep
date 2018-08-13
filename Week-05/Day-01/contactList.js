let contactList = {};

contactList["Quick_Jack"] = ({"FirstName":"Jack","LastName":"Quick","email":"jack.b.quick@gmail.com"});

console.log(contactList);

delete contactList.Quick_Jack;

console.log(contactList);