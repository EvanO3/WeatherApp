
// Getting the  location of where the person is and return the weather of that location
 
const para = document.querySelector("location")
// this function allows to fetch for the temp
async function fetchLocation(){
   const response = await fetch("https://api.weatherapi.com/v1/current.json?key=b735c520ef654522aa922732230808&q=Toronto",{mode:'cors'})
   response.json().then(function(response){
    console.log("It is " +response.current.condition.text)
    console.log("Temp in Celcius : " +response.current.temp_c)
    console.log("Temp in Farenheit: "+ response.current.temp_f)
    console.log("Feels like : "+ response.current.feelslike_c)
    console.log("Humidity: " + response.current.humidity)
  
   })
} 

fetchLocation()