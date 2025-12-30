function generatePattern()
{
    let rows = document.getElementById("rowsInput").value;
    let pattern = "";

    for (let i = 1; i <= rows; i++)
    {
        for(let j=1; j<=rows; j++)
        {
            if(i==1 || i==rows || j==1 || j==rows)
            {
                pattern += "* ";
            }
            else
            {
                pattern += "  ";
            }
        }
        pattern += "\n";
    }
    document.getElementById("pattern").textContent = pattern;   
}