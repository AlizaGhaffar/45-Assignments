//created function
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
//call the function
make_shirt(); //this will print default size and message
make_shirt("small"); //changed the size but default message
make_shirt("medium", "Coding Lover"); //customized the message and size
