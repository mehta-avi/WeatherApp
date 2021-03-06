$(document).ready(function(){

    $("#form").submit(function(event){ 
        event.preventDefault();
        var cityInput = $("#placeInput").val();
        var stateInput = $("#stateInput").val().toUpperCase(); 
    
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&" + stateInput + "&units=imperial&appid=e15b46e85c3be8b2d2f78d0d521d1a47", function(data){
        //console.log(data);
    
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var weather = data.weather[0].main;
        var temp = Math.round(data.main.temp);
        var maxTemp = Math.round(data.main.temp_max);
        var minTemp = Math.round(data.main.temp_min);
    
    
        $(".icon").attr('src', icon);
        $(".temp").append("Currently: " + temp + " °F");
        $(".cityState").append("In " + cityInput + ", " + stateInput);
        $(".weather").append(weather);
        $(".maxTemp").append("Max: " + maxTemp + " °F");
        $(".minTemp").append("Min: " + minTemp + " °F");
    
        $("#form").each(function(){
            this.reset();
        });
    });
    });
    
    
    });
