// Defining Class
class Student 
{
    constructor(name, age, course)
    {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    showDetails()
    {
        return `Name: ${this.name}, Age: ${this.age}, course: ${this.course}`;
    }
}

// Creating Object
let s1 = new Student("Eshwar", 22, "Full Stack Development");
// Displaying Output on HTML Page
document.getElementById("demo").innerHTML = s1.showDetails();