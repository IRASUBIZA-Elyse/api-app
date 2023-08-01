# countries-app 
# below is another way to use to addEventlistener while creating the search region
     function of the search region
     options.forEach((elt) => {
             elt.addEventListener("click",(e) =>{
                     handleFilter(e.target.textContent)
                     list.classList.toggle("hide")
             } )
     });