// Switch Statement :
// The switch statement is used to perform different actions based on different conditions.

function checkResult()
{
    var a = document.getElementById("v1").value;

    switch(a)
    {
        case '101':
            document.getElementById("demo").innerHTML = "Name: Eshwar <br> Marks: 95% <br> First Class";
            break;

        case '102':
            document.getElementById("demo").innerHTML = "Name: Ramesh <br> Marks: 85% <br> Second Class";
            break;

        case '103':
            document.getElementById("demo").innerHTML = "Name: Suresh <br> Marks: 75 <br> Third Class";
            break;

        default:
            document.getElementById("demo").innerHTML = "Invalid Roll Number";
    }
}