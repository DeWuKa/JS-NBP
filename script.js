
$.getJSON   ("http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json", function(data){
    $("#kurs").text(data.rates[0].mid);
});
