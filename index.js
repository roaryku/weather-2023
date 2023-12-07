const api = {
      // API link 
    endpoint: "https://api.openweathermap.org/data/2.5/",
    // our personal key
    key: "2ff830418f44b744f01181b8e0afbb41"
}


const input = document.querySelector("#input");
input.addEventListener("keypress", enter);


// 1 - if enter clicked we start search otherwise no search
function enter(e){
    if (e.keyCode === 13) {
        getInfoF(input.value);
        getInfoC(input.value);
    }
}
async function getInfoF(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=imperial&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
    console.log(result)
}
async function getInfoC(data){
    const resOne = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const resultOne = await resOne.json();
    displayResultOne(resultOne);
    console.log(resultOne)
}
function displayResult(result){
     let city = document.querySelector("#city");
     city.textContent = `${result.name}, ${result.sys.country}`;

     // DATE
     getOurDate();
     
     let temperatureF = document.querySelector("#temperatureF");
     temperatureF.innerHTML = `${Math.round(result.main.temp)}<span>°</span> F`;

     //let temperatureC = document.querySelector("#temperatureC");
     //temperatureC.innerHTML = `${Math.round(resultOne.main.temp)}<span>°</span> C`;

     let feelsLikeF = document.querySelector("#feelsLikeF");
     feelsLikeF.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span> F`;

     let condition = document.querySelector("#condition");
     condition.textContent = `${result.weather[0].description}`;

     let variationF = document.querySelector("#variationF");
     variationF.innerHTML = `H: ${Math.round(result.main.temp_max)}<span>°</span>  L: ${Math.round(result.main.temp_min)}<span>°</span> F`;

     let windF = document.querySelector("#windF");
     windF.textContent = `Wind: ${Math.round(result.wind.speed)} mph`
}

   function displayResultOne(resultOne){
      let temperatureC = document.querySelector("#temperatureC");
      temperatureC.innerHTML = `${Math.round(resultOne.main.temp)}<span>°</span> C`;

      let feelsLikeC = document.querySelector("#feelsLikeC");
      feelsLikeC.innerHTML = ` Feels like: ${Math.round(resultOne.main.feels_like)}<span>°</span> C`;

      let variationC = document.querySelector("#variationC");
      variationC.innerHTML = `H: ${Math.round(resultOne.main.temp_max)}<span>°</span>  L: ${Math.round(resultOne.main.temp_min)}<span>°</span> C`;

      let windC = document.querySelector("#windC");
      windC.textContent = `Wind: ${Math.round(resultOne.wind.speed)} kmh`
   }

function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days [myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;

}

