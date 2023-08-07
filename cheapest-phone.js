const phones = [
    {name: 'samsung', Storage: '64g', camera: '10px', resolution: '1080',price: 64000,color:'black'},
    {name: 'apple', Storage: '65g', camera: '10px', resolution: '1080',price: 94000,color:'blue'},
    {name: 'walton', Storage: '64g', camera: '10px', resolution: '1080',price: 50000,color:'black'},
    {name: 'htc', Storage: '64g', camera: '10px', resolution: '1080',price: 22000,color:'silver'},
    {name: 'xaomi', Storage: '64g', camera: '10px', resolution: '1080',price: 20000,color:'gray'},
    {name: 'nokia', Storage: '64g', camera: '10px', resolution: '1080',price: 24000,color:'pink'}
]


function cheapestPhone(phones){
    let myPhone = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(phone.price < myPhone.price){
            myPhone = phone;
        }
    }
    return myPhone;
}

const myPhone = cheapestPhone(phones)
console.log(myPhone)