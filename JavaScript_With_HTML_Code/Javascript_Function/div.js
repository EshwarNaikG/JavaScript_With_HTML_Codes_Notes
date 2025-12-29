function div()
{
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var division = n1 / n2;
    document.getElementById("result").innerHTML = division;

}