//ASSIGNMENT #17
let guestList:string[] = ["Zara","Aina" , "Hunny","Ayesha" , "Haniya","Afiya"];
 //changing Guest list    
console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guestList.splice(0, guestList.length);
console.log(guestList);