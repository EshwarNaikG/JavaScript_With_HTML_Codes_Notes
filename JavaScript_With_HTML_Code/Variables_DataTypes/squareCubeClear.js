function Square()
{
    var x =document.getElementById("value1").value;
    var sq = x * x;
    document.getElementById("demo").innerHTML=sq;
}

function Cube()
{
    var x =document.getElementById("value1").value;
    var cu = x * x * x;
    document.getElementById("demo").innerHTML=cu;
}

function Clear()
{
    document.getElementById("value1").value="";
    document.getElementById("demo").innerHTML="";
}