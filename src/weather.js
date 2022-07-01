const request = require('request')



const find_temp = (query,callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=7ec9b1e47e10f90e7ef724cd8d1b5044&query="+query
    request({url , json:true},(error, {body}) =>{
        if (error) {
            callback("couldn't connect to weather service!")
        } else if(body.error){
            callback("Please try again !")
        }else{
            callback(body.current.temperature)
        }
    })
}

module.exports= find_temp