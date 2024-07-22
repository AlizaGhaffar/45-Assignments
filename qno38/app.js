//write a function
function describeCity(cityName, countryName) {
    if (countryName === void 0) { countryName = "Pakistan"; }
    console.log("".concat(cityName, " is in ").concat(countryName)); // it will print a simple message
}
describeCity("Karachi"); //write the city name with default country
describeCity("Islamabad");
describeCity("Toronto", "Canada"); // write city and country name 
