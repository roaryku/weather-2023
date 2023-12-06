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
}
async function getInfoC(data){
    const resOne = await fetch(`${api.endpoint}weather?q=${data}&units=metricl&appID=${api.key}`);
    const resultOne = await resOne.json();
    displayResultOne(resultOne);
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

     let feelsLike = document.querySelector("#feelsLike");
     feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>°</span>`;

     let condition = document.querySelector("#condition");
     condition.textContent = `${result.weather[0].description}`;

     let variation = document.querySelector("#variation");
     console.log(result)
     variation.innerHTML = `H: ${Math.round(result.main.temp_max)}<span>°</span>  L: ${Math.round(result.main.temp_min)}<span>°</span>`
}

   function displayResultOne(resultOne){
      let temperatureC = document.querySelector("#temperatureC");
      temperatureC.innerHTML = `${Math.round(resultOne.main.temp)}<span>°</span> C`;
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
