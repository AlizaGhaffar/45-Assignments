//ASSIGNMENT #16
let guest:string[] = ["Aina" , "Hunny" , "Haniya"];
console.log("I have found a bigger dinner table!");
//adding Guests
guest.unshift("Zara")
guest.splice(2, 0, "Ayesha");
guest.push("Afiya");
guest.forEach(guest => {
    console.log(`${guest}, Please come to join me for dinner`);   
});