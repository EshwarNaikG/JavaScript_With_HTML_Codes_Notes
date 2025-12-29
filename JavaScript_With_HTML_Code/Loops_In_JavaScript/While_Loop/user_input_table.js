function generateTable()
{
    var num = document.getElementById("value1").value;
    document.getElementById("output").innerHTML = "<h2>Table of " + num + "</h2>";
    var i = 1; // Initialize counter
    while(i <= 10) 
    {
        var result = num * i;
        document.getElementById("output").innerHTML += num + " x " + i + " = " + result + "<br>";
        i++;
    }
}