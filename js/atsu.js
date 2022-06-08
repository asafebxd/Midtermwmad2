 import { gettingData } from "./index.js";
 import {data} from "./index"
console.log(gettingData())
const conatiner = document.getElementsByClassName("container")[0]
// console.log(conatiner)
const div = document.createElement("div")
conatiner.append(div)
let obj

gettingData().then((obj) => {
    console.log(obj)
    const renderHtml = Array(obj).map((item, index)=>{
        return (
            `
            <div class ="current-box" key =${index}> 
                <p class ="current-name"> Name ${item.name}</p>
                <p class ="current-weather"> Name ${item.weather[0].main}</p>
                <p class ="current-temp"> Temparachar ${item.main.temp}</p>
                <p class ="current-maxtemp"> Maximum Temparachar:${item.main.temp_max}</p>
                <p class ="current-mintemp">Minimum Temparachar :${item.main.temp_min}</p>
                <p class ="current-feelslike"> Feels like :${item.main.feels_like}</p>
                <p class ="current-humidity"> Humidity : ${item.main.humidity}</p>
            </div>
            `
        )
    })
    div.innerHTML = renderHtml
    // return obj
}).catch((err) => {
    console.error(err)
});

 gettingData().then((obj) => {
    console.log(obj)
    const renderHtml = Array(obj).map((item)=>{
        return (
            `
            <div class ="current-box"> 
                <p class ="current-name"> Name ${item.name}</p>
                <p class ="current-temp"> Temparachar ${item.main.temp}</p>
                <p class ="current-maxtemp"> Maximum Temparachar:${item.main.temp_max}</p>
                <p class ="current-mintemp">Minimum Temparachar :${item.main.temp_min}</p>
                <p class ="current-feelslike"> Feels like :${item.main.feels_like}</p>
                <p class ="current-humidity"> Humidity : ${item.main.humidity}</p>
            </div>
            `
        )
    })
    div.innerHTML = renderHtml.join("")
    // return obj
}).catch((err) => {
    console.error(err)
});

