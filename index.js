// console.log("START");

// setTimeout(() => {
//     console.log("WHEN???")
// }, 3000);

// console.log("END");

//  const button = document.querySelector("#btn");
//  const par = document.querySelector("#par");

// button.addEventListener("click", getDogs);

// function getDogs() {
//     fetch( "https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(resReceived => par.innerHTML = `<img src=${resReceived.message} width="300px" alt="dog">`) 
// }

// function getFox() {
//     fetch("https://randomfox.ca/floof/")
//     .then(res => res.json()) 
//     .then(resResult => par.innerHTML = `<img src=${resResult.image} width="300px" alt="fox">`)
// }

// async function getDogs() {
//    const res = await fetch( "https://dog.ceo/api/breeds/image/random");
//   // console.log(res)

//    const resReceived = await res.json();
//    console.log(resReceived.message);

//   showImages(resReceived)
// }

// function showImages(resReceived) {
//    par.innerHTML = `<img src=${resReceived.message} width="300px" alt="dog">`
// }

//https://randomfox.ca/floof/


// async function getFox() {
//    const result =  await fetch("https://randomfox.ca/floof/")
//    console.log(result);

//    const resultReceived = await result.json();
//    console.log(resultReceived.image)

//    showFoxImages(resultReceived);
// }

// function showFoxImages(resultReceived) {
//     par.innerHTML = `<img src=${resultReceived.image} width="300px" alt="fox">`
// }

// https://api.adviceslip.com/

//  const button = document.querySelector("#btn");
// const par = document.querySelector("#par");

// button.addEventListener("click", getAdvice);

// function getAdvice(){
//     fetch("https://api.adviceslip.com/advice")  
//     .then(res => res.json())
//     .then(resReceived => par.textContent = `${resReceived.slip.advice}`);
//}

// async function getAdvice() {
//   const res = await fetch("https://api.adviceslip.com/advice");
//   console.log(res)

//   const resReceived = await res.json();
//   console.log(resReceived.slip.advice);

//   showAdvice(resReceived)
// }

// function showAdvice(resReceived) {
//     par.textContent = `${resReceived.slip.advice}`
// }


// WEATHER APP

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=100101b33cb089705bbfc4577b3a6a2e - API LINK

// 822393d98c58f393f4e48616d7c7b1ad - API KEY

// https://api.openweathermap.org/data/2.5/  -  WHAT WE WILL USE

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