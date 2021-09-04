let tickerSymbol = 'AAPL';
let requestURL = 'https://financialmodelingprep.com/api/v3/profile/'+tickerSymbol+'?apikey=d80c882d9467cf6549267fafea20ca78';


var results = [];

$(function (){

  var symbolName;
  $.ajax({
    type: 'GET',
    url: requestURL,
    async:true,
    dataType: "json",
      success: function(data){
        console.log('success', data);
        symbolName = data[0].symbol;
        console.log(symbolName);
        results.push(symbolName);
      }
  });
});

function testCall(){//still shows as undefined
  console.log(results[0] + 'ewvernvle');
}

testCall();

// var data = [];
// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', requestURL, true)

// request.onload = function () {
//   var data = JSON.parse(this.response);
//   console.log(data);

// }

// // Send request
// request.send()

// function reqListener () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
//   return data;
// }

// function getSymbol(){
//   let allData = reqListener();

//   let symbolName = allData[0].symbolName;

//   return symbolName;
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", requestURL);
// oReq.send();


// let jsondata = "";
// let apiUrl = 'https://financialmodelingprep.com/api/v3/profile/'+tickerSymbol+'?apikey=d80c882d9467cf6549267fafea20ca78';

// async function getJson(url) {//converts into JSON format
//     let response = await fetch(url);
//     let data = await response.json()
//     return data;
// }

// async function tSymbol() {
//     //OPTION 1
//     // getJson(apiUrl)
//     //     .then(data => console.log(data));

//     //OPTION 2
//     jsondata = await getJson(apiUrl)
//     // console.log(jsondata[0].symbol);
//     let x = jsondata[0].symbol;

//     return x;

// }


