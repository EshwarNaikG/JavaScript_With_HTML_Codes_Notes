function generatePattern() {
    let rows = Number(document.getElementById("rows").value);
    let output = " ";

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            output += "* ";
        }
        output += "\n";
    }

    document.getElementById("output").textContent = output;
}
