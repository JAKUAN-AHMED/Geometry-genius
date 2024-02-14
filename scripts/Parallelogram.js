function CalculateParallelogramArea()
{
    //get Parallelogram-base
    const ParallelogramBase=document.getElementById('BaseOfPr');
    const ParallelogramBaseText=ParallelogramBase.value;
    const ParallelogramBaseValue=parseFloat(ParallelogramBaseText);


    //get parallelogram-height
    const parallelogramHeight=document.getElementById('HeightOfPr');
    const parallelogramHeightText=parallelogramHeight.value;
    const parallelogramHeightValue=parseFloat(parallelogramHeightText);

    //get area
    const AreaOfParallelogram=document.getElementById('AreaOfPR');
    AreaOfParallelogram.innerText=ParallelogramBaseValue*parallelogramHeightValue;
}