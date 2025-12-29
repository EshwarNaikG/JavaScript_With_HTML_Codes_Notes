function mult()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var multi = n1 * n2;
    document.getElementById("result").innerHTML = multi;
}