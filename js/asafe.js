import { gettingDataFor } from "./index.js";

const section = document.getElementsByClassName("container-forcast")[0]

const fordiv = document.createElement("div")
section.append(fordiv)

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

const createHtml = forCast.map((item) => {
  return (
    `
    <div>
      <p class="test">${item.dt_text}</p>
    </div>
    `
  )
})
fordiv.innerHTML = createHtml.join("")

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


});
