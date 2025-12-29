function checkAge()
{
    var Age = document.getElementById("age").value;
    if(Age>=18)
    {
        document.getElementById("demo").innerHTML="You are eligible to vote.";
    }
    else
    {
        document.getElementById("demo").innerHTML="You are not eligible to vote.";
    }
}