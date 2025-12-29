function Student()
{
    constructor(name, age, course)    // Parameterized Constructor
    {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Method
    showDetails()  
    {
        return `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
        
    }
}

// Creating Object
var s1 = new Student("Eshwar", 22, "Mathematics");
// Displaying Output
document.getElementById("demo").innerHTML = s1.showDetails();