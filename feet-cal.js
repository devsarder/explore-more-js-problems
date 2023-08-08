function feetToInch(foot){
    const  feet = 12;
    const totalInches = foot * feet;
    return totalInches ;

}
let totalInches = feetToInch(120);
// console.log(totalInches)

function paperRequirements(book1, book2, book3){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;
    const totalPagesBook1 = book1Pages * book1;
    const totalPagesBook2 = book2Pages * book2;
    const totalPagesBook3 = book3Pages * book3;
    const totalBookPages = totalPagesBook1 + totalPagesBook2 + totalPagesBook3;
    return totalBookPages;
}

const book = paperRequirements(2,2,2);
// console.log(book);

// breaking loop with negative number;
function onlyPositive(positive){
    let positiveNumber = [];
    for(let i=0; i < positive.length; i++){
        let number = positive[i];
        if(number < 0){
            break
        }
        positiveNumber.push(number);
    }
    return positiveNumber;

}

const positive = [12, 13 , 14, 15, 16, 17, 18, 19, 20,-21, 22, 23, 24];
const negative = onlyPositive(positive);
console.log(negative);




function largeNumber(a ,b){
console.log(arguments);
}
largeNumber(1,2);

function hello(){
    var msg = 'hello programmers';
    return msg;
}
const result = hello();
console.log(result);