var levelsOfTree = prompt("Insert number of levels of the Tree to create: ");
var stars = "";
//var treeHtmlElement = document.getElementById("tree");
function drawTree(levelsOfTree)
{
    for (var i = 0; i < levelsOfTree; i++)
    {
        for (var k = 1; k <= levelsOfTree - i; k++)
        {
            stars += " ";
        }

        for (var j = 0; j < 2 * i - 1; j++)
        {
            stars += "*";
        }
        stars +="\n";
    }
    console.log(stars);

}
drawTree(levelsOfTree);
//treeHtmlElement.textContent = stars;
