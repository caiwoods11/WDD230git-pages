
/* FETCH */

// Step 1: Declare a global empty array variable to store a list of towns
let towns = []

// Step 2: Declare a function named output that accepts a list of towns as an array argument and does the following for each town:
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of towns

function output (list) {
    console.log(list)
    for (let i = 0; i < list.length ; i++){
        if (list[i].name == "Soda Springs" || list[i].name =="Preston" || list[i].name == "Fish Haven")
    {
        // - Creates an HTML <article> element
        let t = document.createElement("article");
        t.className = "town-grid-item"
        document.querySelector("#towns").appendChild(t);


        // - Creates an HTML <h3> element and add the town's townName property to it
        let n = document.createElement("h1");
        n.textContent = list[i].name;
        t.appendChild(n);

        // - Creates an HTML <img> element and add the prophet's imageUrl property to the src attribute and the prophet's prophetName property to the alt attribute
        let img = document.createElement("img");
        img.src = "images/"+list[i].photo;
        img.className = "townsimg"
        img.alt = "image of the town"
        if(list[i].name == "Fish Haven"){
            img.className += " townsimg-float-right";
            img.alt = "image of the town";
        }
        else 
            img.className += " townsimg-float-left"
        t.appendChild(img);

        let container = document.createElement("div")
        container.className = "town-text"
        t.appendChild(container)

        // - Creates an HTML <h4> element and add the town's dedicated property to it
        let m = document.createElement("h2");
        m.textContent = "Motto: "+list[i].motto;
        container.appendChild(m);

        // - Creates an HTML <h4> element and add the town's dedicated property to it
        let yf = document.createElement("h2");
        yf.textContent = "Year Founded: "+list[i].yearFounded;
        container.appendChild(yf);

        // - Creates an HTML <h4> element and add the town's dedicated property to it
        let cp = document.createElement("h2");
        cp.textContent = "Current Population: "+list[i].currentPopulation;
        container.appendChild(cp);

        // - Creates an HTML <h4> element and add the town's location property to it
        let ar = document.createElement("h2");
        ar.textContent = "Average Rainfall: "+list[i].averageRainfall;
        container.appendChild(ar);

        // - Creates an HTML <h4> element and add the town's location property to it
        let ev = document.createElement("h2");
        // ev.textContent = "Events: "+list[i];
        for (let j = 0; j < list[i].events.length ; j++){
            let evnt = document.createElement("div")
            evnt.textContent = list[i].events[j]
            ev.appendChild(evnt)
        }
        container.appendChild(ev);
    }
}
}

function set_towns (list) {
    towns = list
}


function soda_spings (town) {
    let container = document.querySelector("#event")
    container.className = "town-text"

    // ev.textContent = "Events: "+list[i];
    for (let j = 0; j < town.events.length ; j++){
        let evnt = document.createElement("h3")
        evnt.textContent = town.events[j]
        container.appendChild(evnt)
    }
}

function fish_haven (town) {
    let container = document.querySelector("#event")
    container.className = "town-text"

    // ev.textContent = "Events: "+list[i];
    for (let j = 0; j < town.events.length ; j++){
        let evnt = document.createElement("h3")
        evnt.textContent = town.events[j]
        container.appendChild(evnt)
    }
}

function preston (town) {
    let container = document.querySelector("#event")
    container.className = "town-text"

    // ev.textContent = "Events: "+list[i];
    for (let j = 0; j < town.events.length ; j++){
        let evnt = document.createElement("h3")
        evnt.textContent = town.events[j]
        container.appendChild(evnt)
    }
}


// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/towns.json'
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// Step 5: Add another .then() method with a variable name to hold the towns and an empty arrow function
// Step 6: Inside of second .then() method, assign the list of towns (as a JSON object) to the towns variable
// Step 7: Finally, call the output function and pass it the list of towns

async function Fetchtowns(){
    await fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then((response) => {
        return response.json();
    })
    .then((townsJSON) => {
        towns = townsJSON.towns;
    });
    if (page == "home"){
         output(towns);
         return 
    }
    let town = {}
    for (let i = 0; i < towns.length ; i++){
        if (towns[i].name == "Soda Springs" || towns[i].name =="Preston" || towns[i].name == "Fish Haven")
        {
            if (page == towns[i].name){
                town = towns[i]
                break
            }
        }
    }
    console.log(town);
    if (page == "Soda Springs")
        soda_spings(town)
    else if (page == "Fish Haven")
        preston(town)
    else if (page == "Preston")
        fish_haven(town)
}

Fetchtowns();

