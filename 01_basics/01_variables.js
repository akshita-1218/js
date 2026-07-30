const accountId=122344
let accountEmail="akshita@gmail.com"
var accountPassword="12345"
accountCity="Mandi"
let accountState;

//accountId=2 reassignment not allowed in const

accountEmail="aks@gmail.com"
accountPassword="54321"
accountCity="Kinnaur"

console.log(accountId);

/*
Prefer not to use var
 because of issue in lock scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,,accountState]);