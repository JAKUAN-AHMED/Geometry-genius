function calculateEllipseArea()
{
    //get a
    const Ellipse=getInputValueById('aOfEl');
    //get b
    const EllipseB=getInputValueById('bOfEl');
    //get area
    const area=(3.1416)*Ellipse*EllipseB;
    const EllipseArea=setInnerText('AofEl',area);
}