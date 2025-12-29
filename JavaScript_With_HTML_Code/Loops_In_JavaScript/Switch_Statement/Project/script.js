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
    // document.getElementById("demo").innerHTML="Total Marks: " + total ;
    // document.getElementById("demo1").innerHTML="Percentage: " + percentage.toFixed(2) + "%";

    var choice = parseInt(document.getElementById("v1").value);

    switch(choice)
    {
        case 1:
            document.getElementById("demo").innerHTML="Total Marks: " + total ;
            break;

        case 2:        
            document.getElementById("demo").innerHTML="Percentage: " + percentage.toFixed(2) + "%";
            break;
        
        default:       
                document.getElementById("demo").innerHTML="Invalid Choice";
                break;
        
    }
        

   
}