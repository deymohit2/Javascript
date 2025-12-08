const accountId = 1445 // const is used for making variable immutable i.e, it cannot be changed.
let accountEmail = "deymohit5@gmail.com"
var accountPassword = "12345"

accountCity = "Guwahati"

// accountId = 2 (not allowed)

accountEmail = "deymohit02@gmail.com"
accountPassword = "1223"
accountCity = "Manali"

console.log(accountId);
/*
Prefer not to use var, we can but it is not recommende instead use let and const
Because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity])