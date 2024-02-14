function calculateEllipseArea()
{
    //get a
    const Ellipse=document.getElementById('aOfEl');
    const EllipseText=Ellipse.value;
    const EllipseValue=parseFloat(EllipseText);

    //get b
    const EllipseB=document.getElementById('bOfEl');
    const EllipseBText=EllipseB.value;
    const EllipseBValue=parseFloat(EllipseBText);

    //get area
    const EllipseArea=document.getElementById('AofEl');
    EllipseArea.innerText=(3.1416)*EllipseValue*EllipseBValue;
}