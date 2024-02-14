function CalculateParallelogramArea()
{
    //get Parallelogram-base
    const ParallelogramBase=getInputValueById('BaseOfPr');

    //get parallelogram-height
    const parallelogramHeight=getInputValueById('HeightOfPr');

    //get area
    const area=ParallelogramBase*parallelogramHeight;
    const AreaOfParallelogram=setInnerText('AreaOfPR',area);
}