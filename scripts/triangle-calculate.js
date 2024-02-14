function CalculateTriangleArea()
{
    // triangle-base
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const baseValue=parseFloat(triangleBaseText);
    console.log(baseValue);

    // triangle-height
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value;
    const heightValue=parseFloat(triangleHeightText);
    console.log(heightValue);

    //triangle-area
    let area=.5*baseValue*heightValue;
    console.log('Area of the triangle is = ',area);

    // display area
    const DisplayArea=document.getElementById('triangle-area');
    DisplayArea.innerText=area;

}