//assignment 15

let guest:string[] = ["Alizaa","Ayesha","Shifa"]

let isNotComing = "Ayesha";
console.log(`${isNotComing} can't make the dinner`);

guest.splice(1,1,"Alishba")


//new invitation
guest.forEach((guest)=>{
    console.log(`${guest}, Please come to join me for dinner`);
    
})


