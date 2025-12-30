function myData()
{
    var name = document.getElementById("n1").value;
    var password = document.getElementById("p1").value;
    var password1 = document.getElementById("p2").value;
    var num1 = document.getElementById("n2").value;
    
    if(name === "" || password === "" || password1==="" || num1 === "")
    {
        alert("All fields are mandatory!");
        return false;
    }
    else if(password != password1)
    {
        alert("Please enter same password");
        return false;
    }
    else if(password.length<5 || password.length>5)
    {
        alert("Please Enter Your 5 digits password");
        return false;
    }
    else if(num1.length<10 || num1.length>10)
    {
        alert("Please enter your valid mobile number");
        return false;
    }
     else if(isNaN(num1))
    {
        alert("Only numbers are allowed");
        return false;
    }
    
    else
    {
        return true;
    }
}