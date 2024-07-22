//ASSIGNMENT #17
var guest = ["Aina", "Hunny", "Haniya"];
var guestList = ["Zara", "Aina", "Hunny", "Ayesha", "Haniya", "Afiya"];
//changing Guest list    
console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guestList.splice(0, guestList.length);
console.log(guestList);
