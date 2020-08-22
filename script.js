$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();
    console.log(searchValue)

    // clear input box
    $("#search-value").val("");
    //Search Value is the City name
    searchWeather(searchValue);
  });

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue +
        "&appid=" +
        "8166f1cca2e0c089edcae727916e1ba2" + "&units=imperial",
      dataType: "json",
      success: function (data) {
        console.log (data)

        var title = $("<h3>").addClass("card-title").text(data.name + "(" + new Date().toLocaleDateString() + ")");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
        var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%" );
        var temperature = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " Farenheit");


        //Data is weather info back from the API

        var name = $('#name')
        var windEl = $('#wind')
        var humidityEl = $('#humidity')
        var temperatureEl =$('#temperature')
        
        name.html(title)
        windEl.html(wind)
        humidityEl.html(humidity)
        temperatureEl.html(temperature)

      }
    });
  }
});
