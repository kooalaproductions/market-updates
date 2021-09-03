let tickerSymbol = 'AAPL';
let requestURL = 'https://financialmodelingprep.com/api/v3/profile/'+tickerSymbol+'?apikey=d80c882d9467cf6549267fafea20ca78';


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', requestURL, true)

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);

}

// Send request
request.send()

 