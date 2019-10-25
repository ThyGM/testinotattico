var grid=[0,0,0,0,0,0,0,0,0,0];
var turno=1;
var numMosse=0;

function printData(cellId) 
{
    var tdId = document.getElementById(cellId);
    if(grid[cellId] == 0)
        {
    if (turno == 1) 
    {
        
        tdId.innerHTML = "x";
        turno = 2;
        grid[cellId] = 1;
    }
    
    else 
    {
        tdId.innerHTML = "o";
        turno = 1;
        grid[cellId] = 2;
    }
}else {return;}
    
    
    //orizzontale
    if (grid[1] == grid[2] && grid[1] == grid[3] && grid[1] != 0 || grid[4] == grid[5] && grid[4] == grid[6] && grid[4] != 0 || grid[7] == grid[8] && grid[7] == grid[9] && grid[7] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }
    /*if (grid[4] == grid[5] && grid[4] == grid[6] && grid[4] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }
    if (grid[7] == grid[8] && grid[7] == grid[9] && grid[7] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }*/
    //fine orizzontale

    //verticale
    if (grid[1] == grid[4] && grid[1] == grid[7] && grid[1] != 0 || grid[2] == grid[5] && grid[2] == grid[8] && grid[2] != 0 || grid[3] == grid[6] && grid[3] == grid[9] && grid[3] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }
    /*if (grid[2] == grid[5] && grid[2] == grid[8] && grid[2] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }
    if (grid[3] == grid[6] && grid[3] == grid[9] && grid[3] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }*/
    //fine verticale

    //diagonale
    if (grid[1] == grid[5] && grid[1] == grid[9] && grid[1] != 0 || grid[3] == grid[5] && grid[3] == grid[7] && grid[3] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }
    /*
    if (grid[3] == grid[5] && grid[3] == grid[7] && grid[3] != 0) 
    {
        if (turno == 2) window.alert("La X vince");
        else window.alert("Il O vince");
    }*/
    //fine diagonale
}