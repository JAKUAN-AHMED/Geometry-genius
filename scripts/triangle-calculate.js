function CalculateTriangleArea()
{
    // triangle-base
    const triangleBaseInput=getInputValueById('triangle-base');

    // triangle-height
    const triangleHeightInput=getInputValueById('triangle-height');

    // display area
    const area=.5*triangleBaseInput*triangleHeightInput;
    const DisplayArea=setInnerText('triangle-area',area);

}