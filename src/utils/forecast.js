const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9d88e88561e03a6240fa7fd7117db4ad&query=' + longitude + ' , ' + latitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weatherstack service!', undefined)
        } else if ((body.location.latitude === 0) && (body.location.longitude === 0)) {
            callback('Coordinate error', undefined)
        } else {
            callback(undefined, (body.current.weather_descriptions[0] + '. It is currenly ' + body.current.temperature + ` degrees out. And there is a ` + body.current.feelslike + ` percent chance of raining. And the humidity is ` + body.current.humidity + `.`));
        }
    })

}
module.exports = forecast

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

