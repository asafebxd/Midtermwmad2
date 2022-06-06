export let data 
export async function gettingData(){
    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.246292&lon=-123.116226&appid=cfcca1b79e2e886dd195b9a2079d6eb1')
        const myJson = await response.json()
        console.log(myJson);
        data = {...myJson}
        // console.log(data)
    }catch(error){
        console.error(error);
    }
}