// handle routing logic here //
const axios = require("axios");

exports.weatherResultsPage = (req, res) => {
    res.render("weather-results");
}

exports.addZip = (req, res) => {
    res.render("weather-results");   
}

exports.search = async (req, res) => {
    console.log(req.query.zip);
    try {
        let weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${req.query.zip},US&appid=a220850fdca39be502d740cad05d3805`);

        let weatherData = weatherResponse.data;
        res.render("weather-results", {weatherData});
       
       
    }
    catch (error) {
        res.render("weather-results", { error: "invalid zip code"});
    }
    
};