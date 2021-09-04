

let test =  tSymbol();//passes jsondata but pending promise

test.then(function(result) {//promise is made
    console.log(result + 'ch')
    return result.promise;
 })



let suggestions = [
    "Apple ",
    "AMC",
    "GameStop",
    "Dogecoin",
    "Tesla",
    "Amazon",
];