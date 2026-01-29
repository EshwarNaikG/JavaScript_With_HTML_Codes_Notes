function multiplyTwoNum()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var mult = num1 * num2;
    document.getElementById("result").innerHTML = mult;
}

a = document.getElementById("demo");
a.style.color = "red";