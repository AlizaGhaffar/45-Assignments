//Assignment 20

let fruits: string[] = ["Apple", "Grapes", "pomegranate", "Mango"];
console.log("My favourite fruits are:");

fruits.forEach(fruits => console.log(fruits));

//Assignment 21

let Student: {
  name: string;
  age: number;
  standard: number;
} = {
  name: "Aliza",
  age: 17,
  standard: 12,
};
console.log(
  `The name of student is ${Student.name}, her age is ${Student.age} and she is in class ${Student.standard}`
);