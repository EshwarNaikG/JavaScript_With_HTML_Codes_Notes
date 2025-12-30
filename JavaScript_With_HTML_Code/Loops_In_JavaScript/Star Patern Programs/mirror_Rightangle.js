function generatePattern()
{
     let rows = Number(document.getElementById("rows").value);
    let pattern = "";

    for (let i = 1; i <= rows; i++) 
    {

        // Print spaces
        for (let space = 1; space <= rows - i; space++) 
        {
            pattern += "  ";
        }

        // Print stars
        for (let star = 1; star <= i; star++) 
        {
            pattern += "* ";
        }

        pattern += "\n";
    }

    document.getElementById("output").textContent = pattern;
}