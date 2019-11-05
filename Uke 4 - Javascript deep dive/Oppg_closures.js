
function printTaskNumber(str){
    document.getElementById("input").innerHTML += "<hr/><strong> Oppgave: "+ str +"</strong><br/>";
}

function print(str){
    document.getElementById("input").innerHTML += str+"<br/>";
}

// printTaskNumber(1);

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
// print(counter1.getValue());  
// counter1.decrement();
// counter1.decrement();
// print(counter1.getValue());  
// counter1.reset();
// print(counter1.getValue()); 


// //Oppgave 2 - header
// printTaskNumber(2);

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
// print(counter2.getValue());  
// counter2.decrement();
// counter2.decrement();
// print(counter2.getValue());  
// counter2.reset(20);
// print(counter2.getValue()); 
// counter2.increment();
// print(counter2.getValue());  

// //Oppgave 3 - header
// printTaskNumber(3);

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
// print(counter3.getValue());  
// counter3.decrement();
// counter3.decrement();
// print(counter3.getValue());  
// counter3.reset(20);
// print(counter3.getValue()); 

// //Oppgave 4 - header
// printTaskNumber(4);

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
// print(account1.getBalance());  
// account1.withdraw(50);  
// account1.withdraw(100); 
// print(account1.getBalance());  

// //Oppgave 5 - header
// printTaskNumber(5);

// // Oppgave 5
// function createAccount2(accountpin){
//     var amount = 0;
//     return{
//         deposit: function(funds, pin){
//             if(pin===accountpin){
//                 amount += funds;
//             }else{
//                 print("wrong pin code!")
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
//                 print("wrong pin code!")
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
// print(account2.getBalance("4332"));    
// account2.withdraw(60,"0000");  
// account2.withdraw(60, "4332");  
// print(account2.getBalance());          


//Oppgave 6 - header
//printTaskNumber(6);

// Oppgave 6
// function createAccounts3(accountpin){
//     var accounts = {};

//     var checkPin = function(pin) {
//         if(pin === accountpin){
//             return true;
//         }else{
//             print("Wrong pin code!")
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
//                     print("Insufficient funds!");
//                 }
//             }
//         },
//     }
// }
// var accounts3 = createAccounts3("4332");
// accounts3.addAccount("savings", "4332"); 
// accounts3.addAccount("checking", "4332");
// print(accounts3.getAccounts("4332")); 
// print(accounts3.getBalances("4332")); 
// accounts3.deposit("savings", 100, "4332");
// accounts3.withdraw("savings", 20, "4332"); 
// print(accounts3.getBalances("4332")); 
// print(accounts3.getBalance("savings", "4332"));

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
            print("Wrong pin code!")
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
                    print("Insufficient funds!");
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
print(accounts3.getAccounts("4332")); 
print(accounts3.getBalances("4332")); 
accounts3.deposit("savings", 100, "4332");
accounts3.withdraw("savings", 20, "4332"); 
print(accounts3.getBalances("4332")); 
print(accounts3.getBalance("savings", "4332"));
print(accounts3.getActivity("4332"));