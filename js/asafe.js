import { gettingDataFor } from "./index.js";

const sectionDay = document.getElementsByClassName("container-forDay")[0]

const forDay = document.createElement("div")
sectionDay.append(forDay)

const sectionHour = document.getElementsByClassName("container-forHour")[0]

const forHour = document.createElement("div")
sectionHour.append(forHour)

gettingDataFor().then((data) => {
    console.log(data)
//     let fiveDaysArr = []
//     // console.log(data)
//     const forCast = Array(data).map((item, index)=>{
//         console.log(item.list)
//         for(let i in item.list){
//             if(i % 8 === 0){
//             fiveDaysArr.push(item.list[i])
//             console.log(fiveDaysArr);
//         }

//     // return forCast
// }})
    const daysCast = []
    const hoursCast = []   
        
    console.log(data.list);
    for (let i = 0; i < data.list.length ; i += 8) {
        daysCast.push(data.list[i])
    }
    console.log(daysCast)

    for (let i = 0; i < 8; i++) {
        hoursCast.push(data.list[i])
    }
    console.log(hoursCast)

    const createHtml = daysCast.map((item) => {
      console.log(item);
      return (
        `
        <div class="card-weather">
          <img src="http://openweathermap.org/img/wn/${
                  item.weather[0].icon
                }@2x.png" />
          <div>
            <p class="test">${item.dt_txt}</p>
            <p>${item.weather[0].description}</p>
            <p>${parseInt(item.main.temp)} ℃</p>
            <span>${parseInt(item.main.temp_max)} 
            ℃</span> / <span>${parseInt(item.main.temp_min)} ℃</span>
          </div>
        </div>
        `
      )
    })
    forDay.className = "continer-flex"
    forDay.innerHTML = createHtml.join("")
    

        
    const createhourHTML = hoursCast.map((item) => {
      console.log(item);
      return (
        `
        <div class="card-weather">
          <img src="http://openweathermap.org/img/wn/${
                  item.weather[0].icon
                }@2x.png" />
          <div>
            <p class="test">${item.dt_txt}</p>
            <p>${item.weather[0].description}</p>
            <p>${parseInt(item.main.temp)} ℃</p>
            <span>${parseInt(item.main.temp_max)} 
            ℃</span> / <span>${parseInt(item.main.temp_min)} ℃</span>
          </div>
        </div>
        `
      )
    })
    forHour.className = "continer-flex"
    forHour.innerHTML = createhourHTML.join("")
        

});
