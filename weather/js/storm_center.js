const label = document.querySelector("#form-label");
const input = document.querySelector("#form-input");
const submit= document.querySelector("#form-submit");

let form_state = "";
let form_data = {};

const firstname = () =>{
    form_state = "firstName"

    input.textContent = "";

    label.textContent = "First Name:"
    let firstname = document.createElement("input")
    firstname.id = "first-name";
    firstname.setAttribute("type", "text")
    input.append(firstname)

    if(form_data.firstname != null){
        firstname.setAttribute("value", form_data.firstname);
    }

    submit.textContent="Next"
}
firstname()

const lastname = () =>{
    form_state = "lastName"

    input.textContent = "";

    label.textContent = "Last Name:"
    let lastname = document.createElement("input")
    lastname.id = "last-name";
    lastname.setAttribute("type", "text")
    input.append(lastname)

    if(form_data.lastname != null){
        lastname.setAttribute("value", form_data.lastname)
    }

    submit.textContent="Next"
}

const email = () =>{
    form_state = "Email"

    input.textContent = "";

    label.textContent = "Email:"
    let email = document.createElement("input")
    email.setAttribute("type", "email")
    email.setAttribute("placeholder", "jsmith44@gmail.com")
    input.append(email)

    submit.textContent="Next"
}

const phonenumber = () =>{
    form_state = "phoneNumber"

    input.textContent = "";

    label.textContent = "Phone Number:"
    let phonenumber = document.createElement("input")
    phonenumber.setAttribute("type", "tel")
    phonenumber.setAttribute("placeholder", "455-800-8135")
    input.append(phonenumber)

    submit.textContent="Next"
}

const zip = () =>{
    form_state = "ZIP"

    input.textContent = "";

    label.textContent = "ZIP:"
    let zip = document.createElement("input")
    zip.setAttribute("type", "number")
    input.append(zip)

    submit.textContent="Next"
}

const stormdate = () =>{
    form_state = "stormDate"

    input.textContent = "";

    label.textContent = "Storm Date:"
    let stormdate = document.createElement("input")
    stormdate.setAttribute("type", "date")
    input.append(stormdate)

    submit.textContent="Next"
}

const stormtype = () =>{
    form_state = "stormType"

    input.textContent = "";

    label.textContent = "Storm Type:"

    //Create array of options to be added
    var array = [ "Flash Flood", "Hail", "Hurricane", "Thunderstorm", "Tornado"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "storm-type";
    input.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];

        selectList.appendChild(option);
    }

    if(form_data.stormtype != null){
        selectList.selectedIndex = form_data.stormtype;
    }

    submit.textContent="Next"
}

const stormseverity = () =>{
    form_state = "stormSeverity"

    input.textContent = "";

    label.textContent = "Storm Severity (low to high):"
    let stormseverity = document.createElement("input")
    stormseverity.setAttribute("type", "range")
    stormseverity.setAttribute("min", 1)
    stormseverity.setAttribute("max", 10)
    stormseverity.setAttribute("value", 5)
    stormseverity.setAttribute("list", "step-list")
    input.append(stormseverity)
    //Create array of options to be added
    var array = [...Array(10).keys()];

    //Create and append select list
    var datalist = document.createElement("datalist");
    datalist.id = "step-list";
    input.appendChild(datalist);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        datalist.appendChild(option);
    }

    submit.textContent="Next"
}

const stormregion = () =>{
    form_state = "stormRegion"

    input.textContent = "";

    label.textContent = "Storm Region:"

    //Create array of options to be added
    var array = ["Select Region", "Preston", "Soda Springs", "Fish Haven"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "storm-region";
    input.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];

        if(i == 0){
            option.setAttribute("disabled", true);
        }

        selectList.appendChild(option);
    }
    selectList.selectedIndex = 0;

    submit.textContent="Next"
}
const dangerlevel = () =>{
    form_state = "dangerLevel"

    input.textContent = "";

    label.textContent = "Danger Level:"

    //Create array of options to be added
    var array = ["Yes", "Maybe", "No"];

   //Create and append the options
   for (var i = 0; i < array.length; i++) {
    var option = document.createElement("input");
    option.value = array[i];
    option.text = array[i];
    option.setAttribute("type", "radio")
    option.setAttribute("name", "dangerLevel")
    input.appendChild(option);
}
    submit.textContent="Next"
}


const buttonHandler = (e) => {
    // alert("default prevented");
    switch(form_state){
        case "firstName": {
                e.preventDefault(); // prevents form from reloading page

                // Validiation steps. First name, check if at least 3 characters
                
                // save data to JSON object
                form_data.firstname = document.querySelector("first-name").value;

                lastname() // goes to next option
            break;
        }
        case "lastName": {
            e.preventDefault();
            email()
        break;
    }
        case "Email": {
            e.preventDefault();
            phonenumber()
        break;
    }
        case "phoneNumber": {
            e.preventDefault();
            zip()
        break;
    }
        case "ZIP": {
            e.preventDefault();
            stormdate()
        break;
    }
        case "stormDate": {
            e.preventDefault();
            stormtype()
        break;
    }
        case "stormType": {
            e.preventDefault();
            stormseverity()
        break;
    }
        case "stormSeverity": {
            e.preventDefault();
            stormregion()
        break;
    }
        case "stormRegion": {
            e.preventDefault();
            dangerlevel()
        break;
    }
        default: break;
    }
}
submit.addEventListener('click', buttonHandler);