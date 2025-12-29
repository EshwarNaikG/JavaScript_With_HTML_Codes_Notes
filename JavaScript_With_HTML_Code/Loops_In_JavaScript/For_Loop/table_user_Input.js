function generateTable()
{
    var num = document.getElementById("value1").value;
    document.getElementById("output").innerHTML = "<h2>Table of " + num + "</h2>";
    for(var i = 1; i <= 10; i++)
    {
        var result = num * i;
        document.getElementById("output").innerHTML += num + " x " + i + " = " + result + "<br>";
    }
}