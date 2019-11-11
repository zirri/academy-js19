
function printTaskNumber(str){
    console.log("Oppgave: "+ str)
}


// console.logTaskNumber(1);

// // Oppgave 1
// function makeCounter1(initial){
//     var initialValue = initial;
//     var teller = initial;
//     return {
//         reset: function(){
//             teller = initialValue;
//         },
//         increment: function(){
//             teller++;
//         },
//         decrement: function(){
//             teller--;
//         },
//         getValue: function(){
//             return teller;
//         }
//     }
// };

// var counter1 = makeCounter1(10);
// counter1.increment();
// console.log(counter1.getValue());  
// counter1.decrement();
// counter1.decrement();
// console.log(counter1.getValue());  
// counter1.reset();
// console.log(counter1.getValue()); 


// //Oppgave 2 - header
// console.logTaskNumber(2);

// // Oppgave 2
// function makeCounter2(initial){
//     var counter = initial;
//     return {
//         reset: function(resetTo){
//             counter = resetTo;
//         },
//         increment: function(){
//             counter++;
//         },
//         decrement: function(){
//             counter--;
//         },
//         getValue: function(){
//             return counter;
//         }
//     }
// };

// var counter2 = makeCounter2(10);
// counter2.increment();
// console.log(counter2.getValue());  
// counter2.decrement();
// counter2.decrement();
// console.log(counter2.getValue());  
// counter2.reset(20);
// console.log(counter2.getValue()); 
// counter2.increment();
// console.log(counter2.getValue());  

// //Oppgave 3 - header
// console.logTaskNumber(3);

// // Oppgave 3
// function makeCounter3(initial, step){
//     var counter = initial;
//     return {
//         reset: function(resetTo){
//             counter = resetTo;
//         },
//         increment: function(){
//             counter += step;
//         },
//         decrement: function(){
//             counter -= step;
//         },
//         getValue: function(){
//             return counter;
//         }
//     }
// };

// var counter3 = makeCounter3(0,5);
// counter3.increment();
// console.log(counter3.getValue());  
// counter3.decrement();
// counter3.decrement();
// console.log(counter3.getValue());  
// counter3.reset(20);
// console.log(counter3.getValue()); 

// //Oppgave 4 - header
// console.logTaskNumber(4);

// // Oppgave 4

// function createAccount1() {
//     var amount = 0;
//     return{
//         deposit: function(funds){
//             amount += funds;
//         },
//         withdraw: function(funds){
//             if (funds <=amount){
//                 amount -= funds;
//             }else{
//                 console.log("Insufficient funds!");
//             }
//         },
//         getBalance(){
//             return amount;
//         }
//     }
// }

// var account1 = createAccount1();
// account1.deposit(100);
// console.log(account1.getBalance());  
// account1.withdraw(50);  
// account1.withdraw(100); 
// console.log(account1.getBalance());  

// //Oppgave 5 - header
// console.logTaskNumber(5);

// // Oppgave 5
// function createAccount2(accountpin){
//     var amount = 0;
//     return{
//         deposit: function(funds, pin){
//             if(pin===accountpin){
//                 amount += funds;
//             }else{
//                 console.log("wrong pin code!")
//             }
//         },
//         withdraw: function(funds, pin){
//             if(pin===accountpin){
//                 if (funds <=amount){
//                     amount -= funds;
//                 }else{
//                     console.log("Insufficient funds!");
//                 }
//             }else{
//                 console.log("wrong pin code!")
//             }
//         },
//         getBalance(pin){
//             return amount;
//         }
//     }
// }

// var account2 = createAccount2("4332")
// account2.deposit(100, "0000");  
// account2.deposit(100,"4332");
// console.log(account2.getBalance("4332"));    
// account2.withdraw(60,"0000");  
// account2.withdraw(60, "4332");  
// console.log(account2.getBalance());          


//Oppgave 6 - header
//console.logTaskNumber(6);

// Oppgave 6
// function createAccounts3(accountpin){
//     var accounts = {};

//     var checkPin = function(pin) {
//         if(pin === accountpin){
//             return true;
//         }else{
//             console.log("Wrong pin code!")
//             return false
//         }
//     }

//     return{
//         addAccount: function (name, pin){
//             if(checkPin(pin)){
//                 accounts[name] = 0;
//             }
//         },
//         getAccounts: function(pin){
//             if(checkPin(pin)){
//                 return Object.keys(accounts);
//             }
//         },
//         getBalances: function(pin){
//             if(checkPin(pin)){
//                 console.log(accounts)
//                 return accounts;
//             }
//         },
//         getBalance: function(account, pin){
//             if(checkPin(pin)){
//                 return accounts[account];
//             }
//         },
//         deposit: function(account,funds, pin){
//             if(checkPin(pin)){
//                 accounts[account] += funds;
//             }
//         },
//         withdraw: function(account, funds, pin){
//             if(pin===accountpin){
//                 if (funds <=accounts[account]){
//                     accounts[account] -= funds;
//                 }else{
//                     console.log("Insufficient funds!");
//                 }
//             }
//         },
//     }
// }
// var accounts3 = createAccounts3("4332");
// accounts3.addAccount("savings", "4332"); 
// accounts3.addAccount("checking", "4332");
// console.log(accounts3.getAccounts("4332")); 
// console.log(accounts3.getBalances("4332")); 
// accounts3.deposit("savings", 100, "4332");
// accounts3.withdraw("savings", 20, "4332"); 
// console.log(accounts3.getBalances("4332")); 
// console.log(accounts3.getBalance("savings", "4332"));

//Oppgave 7 - header
printTaskNumber(7);

// Oppgave 7
function createAccounts3(accountpin){
    var accounts = {};
    var log = [];

    var checkPin = function(pin) {
        if(pin === accountpin){
            return true;
        }else{
            console.log("Wrong pin code!")
            return false
        }
    }

    return{
        addAccount: function (name, pin){
            if(checkPin(pin)){
                accounts[name] = 0;
                log.push({action: "add account", name: name})
            }
        },
        getAccounts: function(pin){
            if(checkPin(pin)){
                return Object.keys(accounts);
            }
        },
        getBalances: function(pin){
            if(checkPin(pin)){
                console.log(accounts)
                return accounts;
            }
        },
        getBalance: function(account, pin){
            if(checkPin(pin)){
                return accounts[account];
            }
        },
        deposit: function(account,funds, pin){
            if(checkPin(pin)){
                accounts[account] += funds;
                log.push({action: "deposit", to: account, amount: funds});
            }
        },
        withdraw: function(account, funds, pin){
            if(pin===accountpin){
                if (funds <=accounts[account]){
                    accounts[account] -= funds;
                    log.push({action: "withdraw", to: account, amount: funds});
                }else{
                    console.log("Insufficient funds!");
                }
            }
        },
        getActivity: function(pin){
            if(pin===accountpin){
                console.log(log)
                return log
            }
        },
    }
}
var accounts3 = createAccounts3("4332");
accounts3.addAccount("savings", "4332"); 
accounts3.addAccount("checking", "4332");
console.log(accounts3.getAccounts("4332")); 
console.log(accounts3.getBalances("4332")); 
accounts3.deposit("savings", 100, "4332");
accounts3.withdraw("savings", 20, "4332"); 
console.log(accounts3.getBalances("4332")); 
console.log(accounts3.getBalance("savings", "4332"));
console.log(accounts3.getActivity("4332"));