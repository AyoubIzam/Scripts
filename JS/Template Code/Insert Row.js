
function insertRow(index){
        var tbl = document.getElementById('listing_table');
        var rows = tbl.rows;

        var cellCount = tbl.rows[0].cells.length;
        var insertRow = tbl.insertRow(index);
        for (var i=0;i < cellCount; i++) {var newCell = insertRow.insertCell(i);}
        
}


