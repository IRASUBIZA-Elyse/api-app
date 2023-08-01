let filter = document.querySelector(".filter")
let options = document.querySelectorAll(".options")
let selectField = document.querySelector(".selectField")
let list = document.querySelector(".list")
let flag = document.querySelector(".flag")
let country = document.querySelector(".country")
let region = document.querySelector(".region")
let population = document.querySelector(".population")
let capital = document.querySelector(".capital")

selectField.onclick = function(){
        list.classList.toggle("hide")
}
options.onclick = function(){
        list.classList.toggle("hide")
}
// function of the search region
// options.forEach((elt) => {
//         elt.addEventListener("click",(e) =>{
//                 handleFilter(e.target.textContent)
//                 list.classList.toggle("hide")
//         } )
// });

let numberOfOptions = options.length

for(let i = 0; i<numberOfOptions; i++){
     document.querySelectorAll(".options")[i].addEventListener("click",function(){
        
        let buttonInnerhtml = this.textContent;
        handleFilter(buttonInnerhtml)
        list.classList.toggle("hide")
    }
    );
}

function handleFilter(word){
        filter.textContent = word;

}

fetch('https://restcountries.com/v3.1/name/Rwanda')
.then(resp => resp.json())
.then(data => dataElt(data))
 
function dataElt(data){
        console.log(data);
        country.textContent = data[0].name.common
        flag.src=data[0].flags.svg
        population.textContent = `Population: ${data[0].population}`
        region.textContent = `Region: ${data[0].continents[0]}`
        capital.textContent = `Capital: ${data[0].capital[0]}`
             
}