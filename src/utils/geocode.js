const request = require('request')      //to get data from other websites/files


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWV6emFpIiwiYSI6ImNrc3R5NXRrMzA3dHUyb3F1bTg1ajdkM2UifQ.7bI5YxBg5ENZWVy99DEfQA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {                                                                //unstable network connection error
            callback('Unable to connect to location Services', undefined)
        } else if (body.features.length === 0) {                                     //Empty array error
            callback('Unable to find the location find another place', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode