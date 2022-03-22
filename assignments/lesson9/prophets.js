
/* FETCH */

// Step 1: Declare a global empty array variable to store a list of prophets
let prophets = []

// Step 2: Declare a function named output that accepts a list of prophets as an array argument and does the following for each prophet:
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of prophets

function output (list) {
    console.log(list)
    for (let i = 0; i < list.length ; i++){
        // - Creates an HTML <article> element
        let p = document.createElement("article");
        p.className = "card"
        document.querySelector("#prophets").appendChild(p);

        // - Creates an HTML <h3> element and add the prophet's prophetName property to it
        let n = document.createElement("h3");
        n.textContent = list[i].name+' '+list[i].lastname;
        p.appendChild(n);

        // - Creates an HTML <h4> element and add the prophet's dedicated property to it
        let o = document.createElement("h4");
        o.textContent = "Order of Succession: "+list[i].order;
        p.appendChild(o);

        // - Creates an HTML <h4> element and add the prophet's dedicated property to it
        let t = document.createElement("h4");
        t.textContent = "Length of Term: "+list[i].length;
        p.appendChild(t);

        // - Creates an HTML <img> element and add the prophet's imageUrl property to the src attribute and the prophet's prophetName property to the alt attribute
        let img = document.createElement("img");
        img.src = list[i].imageurl;
        img.className = "prophetimg"
        p.appendChild(img);

        // - Creates an HTML <h4> element and add the prophet's dedicated property to it
        let bp = document.createElement("h4");
        bp.textContent = "Birth Place: "+list[i].birthplace;
        p.appendChild(bp);

        // - Creates an HTML <h4> element and add the prophet's location property to it
        let bd = document.createElement("h4");
        bd.textContent = "Born: "+list[i].birthdate;
        p.appendChild(bd);

        // - Creates an HTML <h4> element and add the prophet's location property to it
        let d = document.createElement("h4");
        d.textContent = "Died: "+list[i].death;
        p.appendChild(d);

        // - Creates an HTML <h4> element and add the prophet's dedicated property to it
        let nc = document.createElement("h4");
        nc.textContent = "Number of Children: "+list[i].numofchildren;
        p.appendChild(nc);

    }
}

function set_prophets (list) {
    prophets = list
}


// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/prophets.json'
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// Step 5: Add another .then() method with a variable name to hold the prophets and an empty arrow function
// Step 6: Inside of second .then() method, assign the list of prophets (as a JSON object) to the prophets variable
// Step 7: Finally, call the output function and pass it the list of prophets

async function Fetchprophets(){
    await fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then((response) => {
        return response.json();
    })
    .then((prophetsJSON) => {
        prophets = prophetsJSON.prophets;
    });
    output(prophets);
}
Fetchprophets();


// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of prophets

function reset () {
    document.querySelector("#prophets").textContent = "";
}

// Step 9: Declare a function named sortBy that does the following:
function prophetAscCompare(a, b){
    return a.lastname.localeCompare(b.lastname)
}
function prophetDescCompare(a, b){
    return -1*a.lastname.localeCompare(b.lastname)
}

function sortBy(e){
    reset()
    if (e.target.selectedIndex == 0) prophets.sort(prophetAscCompare)
    else prophets.sort(prophetDescCompare)
    output(prophets)
    console.log(e.target.selectedIndex)
}

// - Calls the reset function
// - Sorts the global prophet list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of prophets

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change",sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of prophets
// This will require changes to both the HTML and the JavaScript files

let value
const search = (e) => { 
    value = e.target.value

    // 2. check: if input exists and if input is larger than 0
    if (value && value.trim().length > 0){
        reset()
        // 3. redefine 'value' to exclude white space and change input to all lowercase
         value = value.trim().toLowerCase()
        // 4. return the results only if the value of the search is included in the person's name
        // we need to write code (a function for filtering through our data to include the search input value)
        output(prophets.filter(filter, value))
    } else {
        // 5. return nothing
        reset()
    }
}

const filter = (prophet) => {
    console.log (value)
    return (prophet.name.toLowerCase().includes(value) || prophet.lastname.includes(value) || prophet.birthplace.includes(value))
}

document.querySelector("#search").addEventListener("input",search);
document.querySelector("#clear").addEventListener("input",reset);
