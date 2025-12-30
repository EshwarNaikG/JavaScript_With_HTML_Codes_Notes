var rows = 5; // You can change this value to generate a different size pattern
var pattern = "";
for (let i = rows; i >= 1; i--) 
{
    // Print stars
    for (let star = 1; star <= i; star++) 
    {
        pattern += "* ";
    }
    pattern += "\n";
}
document.getElementById("pattern").textContent = pattern;