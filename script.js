
$.getJSON   ("http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json", function(data){
    console.log(data.rates[0].mid);
    $("#kurs").text(data.rates[0].mid);
});
