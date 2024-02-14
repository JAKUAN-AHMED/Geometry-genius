function rectangleAreaCalculate()
{
    //get length
    const length=getInputValueById('length-input');
    //get width
    const width=getInputValueById('width-input');

    //get area
    const area=length*width;
    const AreaOfRectangle=setInnerText('area-find',area);

    
}