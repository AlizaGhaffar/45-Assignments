//Made a list of currentUser

let currentUser = ["Aliza", "shifa", "Hunny", "Haniya"];

//Made another list of newUser
let newUser = ["Arisha", "Abiha", "Aliza", "Shifa"]

//created loop through the newUser to check the availablity of userName.

newUser.forEach(newAnotherUser => {
    //created condition in condition variable

    //let ourCondition = currentUser.some(currentAnotherUser => currentAnotherUser.toLowerCase === newAnotherUser.toLowerCase);

    //printed messages using if else statements
    if (currentUser.some(currentAnotherUser => currentAnotherUser.toLowerCase() === newAnotherUser.toLowerCase())) {
        console.log(`This userName ${newAnotherUser} has already been taken.`);

    }
    else {
        console.log(`This userName ${newAnotherUser} is Available.`);

    }
});