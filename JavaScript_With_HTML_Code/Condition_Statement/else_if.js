//else_if statement :
//The else if statement allows you to check multiple conditions in sequence.
//If the first condition is false, it checks the next condition, and so on,
//  until one of the conditions is true or all conditions have been checked.

function checkMarks()
{
   var a = document.getElementById("marks").value;
   if(a>=300)
    {
        document.getElementById("demo").innerHTML="Comgratulations! You have passed with A grade.";
    } 
    else if(a>=225)
    {
        document.getElementById("demo").innerHTML="You have passed with B grade.";
    }
    else if(a>=165)
    {
        document.getElementById("demo").innerHTML="You have passed with C grade.";
    }
    else
    {
        document.getElementById("demo").innerHTML="Sorry! You have failed.";
    }
}