import { apiKey } from "./apikey.js";
// console.log(apiKey.weather)


export async function gettingData(){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.246292&lon=-123.116226&appid=${apiKey.weather}&units=metric`)
        console.log(response)
        const myJson = await response.json()
        // console.log(myJson);
        let data = {...myJson};
        // console.log(data); 
        return data       
    }catch(error){
        console.error(error);
    }
}

export async function gettingDataFor(){
    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.246292&lon=-123.116226&appid=${apiKey.weather}&units=metric`)

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=8392b61376612fdef1c2d721674c97b5`)

        // console.log(response)
        const myJson = await response.json()
        // console.log(myJson);
        let data = {...myJson};
        // console.log(data); 
        return data       
    }catch(error){
        console.error(error);
    }
}

