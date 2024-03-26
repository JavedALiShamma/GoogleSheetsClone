// Step 1 we need to create a 26 columns and add to the head row
let columns=26;
let rows=100;
let headrow=document.getElementById("headrow");
for(let i=1;i<=columns;i++){
    let cell=document.createElement("div");
    cell.innerHTML=String.fromCharCode(i+64); // A=65
    cell.className="head-cell";
    headrow.appendChild(cell);
}
/// Step=2  we need to create a numners from 1 to 100 and added to sno
let sno=document.getElementById("sno");
for(let i=1;i<=100;i++){
    let snoRow=document.createElement("div");
    snoRow.className="sno-row";
    snoRow.innerHTML=i;
    sno.appendChild(snoRow);
}
/// Step 3 we need to add all the cell which we need to add in this body cell
let body=document.getElementById("body");
for(let i=1;i<=rows;i++){
    // Here each row will get all the cell which will have 26 cells in each
    let currRow=document.createElement("div");
    currRow.className="curr-row";
    for(let j=1;j<=26;j++){
        // here we will add all the cell
        let cell=document.createElement("div");
        cell.contentEditable=true;
        cell.className="cell";
        /// Here we need to add a ID of the cell 
        // That needs to be unique 
        cell.id=`${String.fromCharCode(j+64)}`+`${i}`
        currRow.appendChild(cell);
        cell.addEventListener("focus",onFocusEvent);
        
    }
    body.append(currRow);
}
//We need to add a event listner to the body element 
// Get the exact target of where it is been clicked
/// STEP we need a global variable 
let selectedCell=null;
const state={};
// body.addEventListener("click",function(e){
//     // Here we need to see wheather we can call exact element or not
//     console.log(e.target);
//     selectedCell=e.target;
//     /// Here we need id of every element selected
//     let selectedArea=document.getElementById("selectedArea");
//     selectedArea.innerHTML=selectedCell.id;
// })
//  This is creating a problem that it click all the body some time 