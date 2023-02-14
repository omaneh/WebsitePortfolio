
//Search bar 

/* <div class="disappearing_prompt"><p id = "search_prompt">Type to search...</p><input id = "searchBarText" type="text"></div>
        <input class = "searchButton" type="button" value="Search"> */

const searchResults = document.querySelector("#searchBarText");
const searchBtn = document.querySelector(".searchButton");

function searchResultsAlert() {
    return alert(`Unfortuntely we dont have any ${searchResults.value} as this is not a legitimate site.`)
}

searchBtn.addEventListener("click", searchResultsAlert);




// Change Quantity of Item 

const subtractBtn = document.querySelector("#subtract");
let quantityUpdated = document.querySelector("#quantity");
const addBtn = document.querySelector("#add");
let totalItemQuantity = 0;

function subtractItemQuantity() {
    totalItemQuantity -= 1;
    return changeQuantity(totalItemQuantity);
}

function addItemQuantity() {
     totalItemQuantity += 1;
     console.log(totalItemQuantity);
    return changeQuantity(totalItemQuantity);
}

function changeQuantity(totalItemQuantity) {
    return quantityUpdated.innerHTML = `${totalItemQuantity}`;
}

subtractBtn.addEventListener("click", subtractItemQuantity);
addBtn.addEventListener("click", addItemQuantity);

//button 

let checkoutBtn = document.querySelector("#check_out");

function alertContinue() {
   let question = prompt("This is not a legitimate website but if you are interested in continuing to the actual website of the item, please enter yes");
   if (question == "yes") {
   return changeLocation();
   } else {
    alert("Ok. Please enjoy the website.")
   }
}

function changeLocation() {
    location.replace("https://selkiecollection.com/collections/gowns/products/the-ivory-in-bloom-bridal-gown");
}

checkoutBtn.addEventListener("click", alertContinue);