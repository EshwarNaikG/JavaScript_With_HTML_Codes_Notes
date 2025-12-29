function findResult()
{
    var a = parseFloat(document.getElementById("english").value);
    var b = parseFloat(document.getElementById("math").value);
    var c = parseFloat(document.getElementById("science").value);
    var d = parseFloat(document.getElementById("kannada").value);
    var e = parseFloat(document.getElementById("social").value);
    var f = parseFloat(document.getElementById("hindi").value);
    var total = a + b + c + d + e + f;
    var percentage = (total / 600) * 100;
    document.getElementById("demo").innerHTML="Total Marks: " + total ;
    document.getElementById("demo1").innerHTML="Percentage: " + percentage.toFixed(2) + "%";

    if(percentage >= 80)
    {
        document.getElementById("demo2").innerHTML="Congratulations! You are first class with Distinction.";
    }
    else if(percentage >= 60)
    {
        document.getElementById("demo2").innerHTML="congratulations! You are first class.";
    }
    else if(percentage >= 40)
    {
        document.getElementById("demo2").innerHTML="You are second class.";
    }
    else if(percentage >= 33)
    {
        document.getElementById("demo2").innerHTML="You are third class.";
    }
    else
    {
        document.getElementById("demo2").innerHTML="Sorry! You have failed.";
    }
}