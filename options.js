/// Here we put options.js above the 
// Main jS file because this should be uploaded first
// let selectedCell=null;
let activeCell=document.getElementById("selectedArea");      
function onFocusEvent(e){
    /// here we need to calculte the 
    if(selectedCell){
        selectedCell.classList.remove("active-cell");
    }
    selectedCell=e.target;
    // console.log(selectedCell);
    activeCell.innerHTML=selectedCell.id;
    // Here we will check wheather the data cell is focused or not
    
    selectedCell.classList.add("active-cell");
    applyChangesToForm();
}
//// Here we need to 
let expressionForm=document.getElementById("expressionForm");
expressionForm.addEventListener("submit",function(e){
    e.preventDefault();
    
    let evalans=eval(expressionForm.expression.value);
    if(selectedCell){
        selectedCell.innerHTML=evalans;
    }
    else{
        alert("please select a cell first");
        expressionForm.reset();     
    }   
});

let form=document.querySelector("#wizardForm");

/// Now we have all the data regarding the form and now we need to add
// All the details regarding the form 
// Step==2 We need to add these detaisls to selecetd iteam
function applySelectedDataToForm(styles){

        selectedCell.style.fontSize=styles.fontSize +'px';
        // selectedCell.style.fontFamily=styles.fontFamily;
        selectedCell.style.fontWeight=styles.isBold ? "bold":"400";
        selectedCell.style.fontStyle=styles.isItalic ? "italic" : "normal";
        selectedCell.style.textAlign=styles.align;
        /// Here we need to calculate the color
        selectedCell.style.color=styles.textColor;
        selectedCell.style.backgroundColor=styles.backgroundColor;
}
form.addEventListener("change",function(){
    if(!selectedCell){
        alert("Please select a cell first");
        form.reset();
    }
    else{
        let formData ={
            /// here we will extract the data from the above form
            fontFamily:form["fontFamilyDetails"].value,
            fontSize:form["fontSize"].value,
            isBold:form["isBold"].checked,
            isItalic:form["isItalic"].checked,
            align:form["align"].value,
            textColor:form["text-color"].value,
            backgroundColor:form["bgColor"].value,
        }
        /// here we need to add details regarding the selected iteams
        /// ------- IMPORTANT --------
        // Here we need to add the 
       state[selectedCell.id]={...formData,innerText:selectedCell.innerHTML};
     
        applySelectedDataToForm(formData);
    }
});
//  Here we need to find the whether the cell is first selected or not 
// Here we will get all the data wheather it is selected or not
function applyChangesToForm(){
    // Here we need to check wheather this cell is selected once or not
    if(state[selectedCell.id]){
        /// Here we can use loop
        const curr=state[selectedCell.id];
        form["fontSize"].value=state[selectedCell.id].fontSize;
       form["isBold"].checked=state[selectedCell.id].isBold;
       form["isItalic"].checked=state[selectedCell.id].isItalic;
       form["fontFamilyDetails"].value=state[selectedCell.id].fontFamily;
       form["align"].value=state[selectedCell.id].align;
       form["text-color"].value=state[selectedCell.id].textColor;
       form["bgColor"].value=state[selectedCell.id].backgroundColor;        
    }
    else{
        form.reset();
    }  
}
