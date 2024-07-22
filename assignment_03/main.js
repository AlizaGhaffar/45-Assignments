//Name Cases: Store a person’s name in a variable, and then print that person’s name in 
var firstName = "aliza ghaffar";
//lowercase
console.log(firstName.toLowerCase());
//uppercase
console.log(firstName.toUpperCase());
//titlecase
console.log(firstName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
