function calculatePentagonArea()
{
    //get p
    const Pentagon=document.getElementById('pOfPt');
    const PentagonText=Pentagon.value;
    const PentagonValue=parseFloat(PentagonText);

    //get b
    const PentagonB=document.getElementById('bOfPt');
    const PentagonBText=PentagonB.value;
    const PentagonBValue=parseFloat(PentagonBText);

    //get area
    const PentagonArea=document.getElementById('AofPt');
    PentagonArea.innerText=.5*PentagonValue*PentagonBValue;
}