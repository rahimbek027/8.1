"use strict";
/*4-masal*/
function getNameAndEmail(users) {
    return users.map(user => ({
        name: user.name,
        email: user.email
    }));
}
const users = [
    { id: 1, name: "Rahimbek", email: "rahimbek@gmail.com", password: "1234", address: "Uchtepa-Lutfiy" },
    { id: 2, name: "ildam", email: "ildam@gmail.com", password: "abcd", address: "Vatan" },
    { id: 3, name: "Parvoz", email: "parvoz@gmail.com", password: "5678", address: "Chilonzor" },
];
const result = getNameAndEmail(users);
console.log(result);
