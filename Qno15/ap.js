//assignment 15
var guest = ["Alizaa", "Ayesha", "Shifa"];
var isNotComing = "Ayesha";
console.log("".concat(isNotComing, " can't make the dinner"));
guest.splice(1, 1, "Alishba");
//new invitation
guest.forEach(function (guest) {
    console.log("".concat(guest, ", Please come to join me for dinner"));
});
