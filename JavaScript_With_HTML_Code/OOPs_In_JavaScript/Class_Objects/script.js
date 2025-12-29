class Student {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    showDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
    }
}

let s1 = new Student("Eshwar", 22, "Mathematics");
document.getElementById("demo").innerHTML = s1.showDetails();
