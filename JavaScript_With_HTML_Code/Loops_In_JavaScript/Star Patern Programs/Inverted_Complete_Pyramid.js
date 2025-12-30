function generatePattern()
{
    let rows = document.getElementById("rowsInput").value;
    let pattern = "";

    for (let i = rows; i >= 1; i--)
    {
        // Print spaces
        for (let space = 1; space <= rows - i; space++)
        {
            pattern += "  ";
        }
        // Print stars
        for (let star = 1; star <= 2 * i - 1; star++)
        {
            pattern += "* ";
        }
        pattern += "\n";
    }
    document.getElementById("pattern").textContent = pattern;
}