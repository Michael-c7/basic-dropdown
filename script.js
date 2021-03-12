let fontForm = document.querySelector(".font-selection-container");
let fontSelection = document.querySelector(".font-selection");
let exampleParagraph = document.querySelector(".example-paragraph");





onchange = function() {
    if(fontSelection.value === "Arial") {
        exampleParagraph.style.fontFamily ="Arial, Helvetica, sans-serif";
    
    } else if(fontSelection.value === "Akaya Telivigala") {
        exampleParagraph.style.fontFamily ="Akaya Telivigala, cursive";
    
    } else if(fontSelection.value === "DotGothic16") {
        exampleParagraph.style.fontFamily = "DotGothic16, sans-serif";
    
    } else if(fontSelection.value === "Fascinate") {
        exampleParagraph.style.fontFamily = "Fascinate, cursive";
    } else if(fontSelection.value === "Roboto") {
        exampleParagraph.style.fontFamily = "Roboto, sans-serif";
    } else {
        console.log("else triggered in the fontSelection else /if statement");
        exampleParagraph.style.fontFamily ="Arial, Helvetica, sans-serif";
    }
}




