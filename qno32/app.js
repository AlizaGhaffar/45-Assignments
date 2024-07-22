//Made a list of currentUser
var currentUser = ["Aliza", "shifa", "Hunny", "Haniya"];
//Made another list of newUser
var newUser = ["Arisha", "Abiha", "Aliza", "Shifa"];
//created loop through the newUser to check the availablity of userName.
newUser.forEach(function (newAnotherUser) {
    //created condition in condition variable
    //let ourCondition = currentUser.some(currentAnotherUser => currentAnotherUser.toLowerCase === newAnotherUser.toLowerCase);
    //printed messages using if else statements
    if (currentUser.some(function (currentAnotherUser) { return currentAnotherUser.toLowerCase() === newAnotherUser.toLowerCase(); })) {
        console.log("This userName ".concat(newAnotherUser, " has already been taken."));
    }
    else {
        console.log("This userName ".concat(newAnotherUser, " is Available."));
    }
});
