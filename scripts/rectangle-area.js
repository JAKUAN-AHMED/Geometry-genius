function rectangleAreaCalculate()
{
    //get length
    const length=document.getElementById('length-input');
    const lengthText=length.value;
    const lengthValue=parseFloat(lengthText);

    //get width
    const width=document.getElementById('width-input');
    const widthText=width.value;
    const widthValue=parseFloat(widthText);

    //get area
    const area=document.getElementById('area-find');
    area.innerText=lengthValue*widthValue;
    
}