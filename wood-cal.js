


function woodCalculation(chairQuantity,tableQuantity,bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;
    const pricePerFoot = 50;

    const chairWood = chairQuantity * perChair;
    const tableWood = tableQuantity * perTable;
    const bedWood = bedQuantity * perBed;
    const totalWood = chairWood + tableWood + bedWood;
    const totalPrice = totalWood * pricePerFoot
    return totalPrice

}
const totalWood = woodCalculation(4, 2, 3);
console.log(totalWood)