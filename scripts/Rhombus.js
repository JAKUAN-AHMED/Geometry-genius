function calculateRhombusArea()
{
    //Rhombus d1
    const Rhombus=getInputValueById('d1OfRh');


    //Rhombus d2
    const RhombusD2=getInputValueById('d2OfRh');
    //get area
    const area=.5*Rhombus*RhombusD2;
    const RhombusArea=setInnerText('AofRh',area);

}