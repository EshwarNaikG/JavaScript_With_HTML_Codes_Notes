// Arithmetic Operator Example: Addition
function add()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var sum = n1 + n2
    document.getElementById("demo").innerHTML=sum;
}

// subtraction
function subtract()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var difference = n1 - n2
    document.getElementById("demo").innerHTML=difference;
}

// multiplication
function multiply()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var product = n1 * n2
    document.getElementById("demo").innerHTML=product;
}

// division
function divide()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var quotient = n1 / n2
    document.getElementById("demo").innerHTML=quotient;
}

// modulus
function modulus()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var remainder = n1 % n2
    document.getElementById("demo").innerHTML=remainder;
}

// Clear function
function Clear()
{
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("demo").innerHTML="";
}