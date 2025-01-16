'use strict';
function getElementWidth(content, padding, border) {
    let numberContent = parseFloat(content)
    let numberPadding = parseFloat(padding)
    let numberBorder = parseFloat (border)
    const result = numberContent + numberPadding * 2 + numberBorder * 2;
    return result + "px";
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));