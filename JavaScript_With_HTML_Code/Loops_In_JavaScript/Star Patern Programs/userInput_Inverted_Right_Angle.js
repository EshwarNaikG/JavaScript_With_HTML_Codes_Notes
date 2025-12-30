function generatePattern()
{
    let rows = document.getElementById("rowsInput").value;
    let pattern = "";

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
}