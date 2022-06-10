let star_button = document.getElementById("star_favorite");
let place_names = document.getElementById("city_test_fake")
let list_favorite = document.getElementById("favorite_list")

// function createListElement () {
    
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(place_names.textContent));
//     ul_favorite.appendChild(li);
    
// }

// star_button.addEventListener("click", createListElement);

const favCities = []

let creatingListElement = function createListElement() {
   if (favCities.length !== 0) {
       
   
    
    for (let i = 0; i < favCities.length; i++) {
        if (favCities[i] !== place_names.textContent) {
            
            let option = document.createElement("option");
            option.appendChild(document.createTextNode(place_names.textContent));
            list_favorite.appendChild(option);
            favCities.push(place_names.textContent)
            console.log(favCities)
        }else {
            alert("This City is in the Favorite List Already!")
        }

    } 
} else {
    let option = document.createElement("option");
            option.appendChild(document.createTextNode(place_names.textContent));
            list_favorite.appendChild(option);
            favCities.push(place_names.textContent)
            console.log(favCities)

}
}

star_button.addEventListener("click", creatingListElement);

function googleApi() {
    
const input = document.getElementById("pac-input");
const options = {
  fields: ["address_components", "geometry", "icon", "name"],
  types: ["(cities)"],
 
}
const autocomplete = new google.maps.places.Autocomplete(input, options);

};
googleApi();

