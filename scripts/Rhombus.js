function calculateRhombusArea()
{
    //Rhombus d1
    const Rhombus=document.getElementById('d1OfRh');
    const RhombusText=Rhombus.value;
    const RhombusValue=parseFloat(RhombusText);


    //Rhombus d2
    const RhombusD2=document.getElementById('d2OfRh');
    const RhombusD2Text=RhombusD2.value;
    const RhombusD2Value=parseFloat(RhombusD2Text);

    //get area
    const RhombusArea=document.getElementById('AofRh');
    RhombusArea.innerText=.5*RhombusValue*RhombusD2Value;

}