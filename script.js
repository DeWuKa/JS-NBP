
$(document).ready(function () {
$("#but").on("click", function() {
$.getJSON ("http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json", function(data){
    var now = new Date(Date.now());
    var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    $("#kurs").text((data.rates[0].mid) + " " + " "+ formatted);      
    });
});
});


