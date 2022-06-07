import { gettingDataFor } from "./index.js";
// let test
gettingDataFor().then((data) => {
    console.log(data)
    let test = Array(data)
    // const forCast = Array(data).map((item,index) => {
    //     console.log(item.list);
    //     item.list.forEach(Element => {
    //         if (Element === item.list[0] || ) {
    //             console.log(Element)
    //         }else{
    //             console.log("no")
            
    //     }
    // });
    // });
    // const 5daysCast = []
    // const 3hoursCast = []
    console.log(data.list);
    for (let i = 0; i < data.list.lenght; i++) {
        console.log(i)
    }
});
console.log(test);
// for (let i = 0; i < data.list.lenght; i++) {
//     console.log(i)
// }