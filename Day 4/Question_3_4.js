let Student = [
  {
    name: "Abhishek",
    age: 31,
    country: "India",
    hobbies: ["Swimming", "Dancing", "Cricket", "Workout"],
  },
  {
    name: "Raj",
    age: 22,
    country: "India",
    hobbies: ["Reading", "Dancing", "Cricket", "Workout", "Acting0"],
  },
  {
    name: "Simran",
    age: 19,
    country: "India",
    hobbies: ["Reading", "Dancing", "Acting", "Singing"],
  },
  {
    name: "Scarlett",
    age: 21,
    country: "USA",
    hobbies: ["Swimming", "Reading", "Dancing", "Singing", "Workout", "Acting"],
  },
  {
    name: "Chris",
    age: 34,
    country: "England",
    hobbies: ["Workout", "Rugby", "Martial Arts"],
  },
];

console.log("Objects :");
Student.forEach(function (ele) {
  console.log(ele);
});

console.log("Students with age less than 30 :");
for (let i = 0; i < Student.length; i++) {
  if (Student[i].age < 30) {
    console.log(Student[i]);
  }
}

console.log("Students with age above 30 :");
for (let i = 0; i < Student.length; i++) {
  if (Student[i].age > 30) {
    console.log(Student[i]);
  }
}

console.log("Student who lives in India :");
for (let i = 0; i < Student.length; i++) {
  if (Student[i].country == "India") {
    console.log(Student[i]);
  }
}
