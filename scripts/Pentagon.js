function calculatePentagonArea()
{
    //get p
    const Pentagon=getInputValueById('pOfPt');

    //get b
    const PentagonB=getInputValueById('bOfPt');

    //get area
    const area=.5*Pentagon*PentagonB;
    const PentagonArea=setInnerText('AofPt',area);
}
function getInputValueById(inputFiledId)
{
    const inputFiled=document.getElementById(inputFiledId);
    const inputValueText=inputFiled.value;
    const inputValue=parseFloat(inputValueText);
    return inputValue;
}
function setInnerText(text,area)
{
    const texts=document.getElementById(text);
    texts.innerText=area;
}