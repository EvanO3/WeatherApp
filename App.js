
// Getting the  location of where the person is and return the weather of that location
 
const para = document.querySelector("#location")
const para2 = document.querySelector("#location2")
const para3 = document.querySelector("#location3")
const para4 = document.querySelector("#location4")
const para5 = document.querySelector("#location5")
// this function allows to fetch for the temp

const btn = document.querySelector('#btn')
const searchBar = document.querySelector('#searchBar')
btn.addEventListener('click', async()=>{
    const searchTerm = searchBar.value; 
    if(searchTerm){
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b735c520ef654522aa922732230808&q=${encodeURIComponent(searchTerm)}`,{mode:'cors'})
        response.json().then(function(response){
            para.innerHTML ="It is " +response.current.condition.text;
            para2.innerText="Temp in Celcius : " +response.current.temp_c;
            para3.innerText= "Temp in Farenheit :" + response.current.temp_f;
            para4.innerText= "Feels like : "+ response.current.feelslike_c;
            para5.innerText="Humidity: " + response.current.humidity;
            para.inn

        })
    }
})
 
   



  

