function CalculateTriangleArea()
{
    // triangle-base
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const baseValue=parseFloat(triangleBaseText);


    // triangle-height
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value;
    const heightValue=parseFloat(triangleHeightText);

    // display area
    const DisplayArea=document.getElementById('triangle-area');
    DisplayArea.innerText=.5*baseValue*heightValue;

}