const label = document.querySelector("#form-label");
const input = document.querySelector("#form-input");
const submit= document.querySelector("#form-submit");
const f_error = document.querySelector("#form-error");

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

    if(form_data.f_name != null){
        firstname.setAttribute("value", form_data.f_name);
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

    if(form_data.l_name != null){
        lastname.setAttribute("value", form_data.l_name)
    }

    submit.textContent="Next"
}

const email = () =>{
    form_state = "Email"

    input.textContent = "";

    label.textContent = "Email:"
    let email = document.createElement("input")
    email.id = "e-mail";
    email.setAttribute("type", "email")
    email.setAttribute("placeholder", "jsmith44@gmail.com")
    input.append(email)

    if(form_data.e_mail != null){
        lastname.setAttribute("value", form_data.e_mail)
    }

    submit.textContent="Next"
}

const phonenumber = () =>{
    form_state = "phoneNumber"

    input.textContent = "";

    label.textContent = "Phone Number:"
    let phonenumber = document.createElement("input")
    phonenumber.id = "phone-number";
    phonenumber.setAttribute("type", "tel")
    phonenumber.setAttribute("placeholder", "455-800-8135")
    input.append(phonenumber)

    if(form_data.p_number != null){
        lastname.setAttribute("value", form_data.p_number)
    }

    submit.textContent="Next"
}

const zip = () =>{
    form_state = "ZIP"

    input.textContent = "";

    label.textContent = "ZIP:"
    let zip = document.createElement("input")
    zip.id = "z-i-p";
    zip.setAttribute("type", "number")
    input.append(zip)

    if(form_data.zip_code != null){
        lastname.setAttribute("value", form_data.zip_code)
    }

    submit.textContent="Next"
}

const stormdate = () =>{
    form_state = "stormDate"

    input.textContent = "";

    label.textContent = "Storm Date:"
    let stormdate = document.createElement("input")
    stormdate.id = "storm-date";
    stormdate.setAttribute("type", "date")
    input.append(stormdate)

    if(form_data.storm_date != null){
        lastname.setAttribute("value", form_data.storm_date)
    }

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

    if(form_data.storm_type != null){
        lastname.setAttribute("value", form_data.storm_type)
    }

    submit.textContent="Next"
}

const stormseverity = () =>{
    form_state = "stormSeverity"

    input.textContent = "";

    label.textContent = "Storm Severity (low to high):"
    let stormseverity = document.createElement("input")
    stormseverity.id = "storm-severity"
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

    if(form_data.storm_sev != null){
        lastname.setAttribute("value", form_data.storm_sev)
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

    if(form_data.storm_reg != null){
        lastname.setAttribute("value", form_data.storm_reg)
    }

    submit.textContent="Next"
}
const dangerlevel = () =>{
    form_state = "dangerLevel"

    input.textContent = "";

    label.textContent = "Are you in immediate danger?"

    //Create array of options to be added
    var array = ["Yes", "Maybe", "No"];

   //Create and append the options
   for (var i = 0; i < array.length; i++) {
    var option_label = document.createElement("label");
    option_label.setAttribute("for", array[i]);
    option_label.textContent = array[i];
    input.appendChild(option_label);
    var option = document.createElement("input");
    option.id = array[i];
    option.value = array[i];
    option.text = array[i];
    option.setAttribute("type", "radio");
    option.setAttribute("name", "dangerLevel");
    option_label.appendChild(option);
   }

    if(form_data.danger_lvl != null){
        lastname.setAttribute("value", form_data.danger_lvl)
    }
    submit.textContent="Next"
}

const comments = () =>{
    form_state = "Comments"

    input.textContent = "";

    label.textContent = "Additional Comments:"
    let comments_textbox = document.createElement("textarea")
    comments_textbox.id = "add-comments";
    comments_textbox.setAttribute("rows", 5)
    comments_textbox.setAttribute("cols", 50)
    input.append(comments_textbox)

    if(form_data.add_comments != null){
        comments_textbox.setAttribute("value", form_data.add_comments);
    }

    submit.textContent="SUBMIT"
}

const thankyou = () =>{
    form_state = "thankYou"

    input.textContent = "";

    label.textContent = "Thank you for completing the Get Climate Info Storm Reporting Form"

    submit.setAttribute("hidden", "hidden");
}


const buttonHandler = (e) => {
    // alert("default prevented");
    switch(form_state){
        case "firstName": {
                e.preventDefault(); // prevents form from reloading page

                // Validiation steps. First name, check if at least 3 characters
                // console.log(form_data)
                // console.log(document.querySelector("#first-name"))

                let regex = /^[\w]{3,25}$/
                let data = document.querySelector("#first-name").value;
                if (!regex.test(data)){
                    f_error.textContent = "Text must be 3 characters long"
                    f_error.removeAttribute("hidden")
                    return
                }

                // save data to JSON object
                form_data.f_name = data;
                f_error.setAttribute("hidden", "hidden");
                f_error.textContent = "";

                lastname() // goes to next option
            break;
        }
        case "lastName": {
            e.preventDefault();

            let regex = /^[\w]{3,25}$/
            let data = document.querySelector("#last-name").value;
            if (!regex.test(data)){
                f_error.textContent = "Text must be 3 characters long"
                f_error.removeAttribute("hidden")
                return
            }

            // save data to JSON object
            form_data.l_name = data;
            f_error.setAttribute("hidden", "hidden");
            f_error.textContent = "";

            email()
        break;
    }
        case "Email": {
            e.preventDefault();

            let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

                let data = document.querySelector("#e-mail").value;
                if (!regex.test(data)){
                    f_error.textContent = "Please enter valid email address"
                    f_error.removeAttribute("hidden")
                    return
                }

                // save data to JSON object
                form_data.e_mail = data;
                f_error.setAttribute("hidden", "hidden");
                f_error.textContent = "";

            phonenumber()
        break;
    }
        case "phoneNumber": {
            e.preventDefault();

            let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

            let data = document.querySelector("#phone-number").value;
            if (!regex.test(data)){
                f_error.textContent = "Please enter valid phone number"
                f_error.removeAttribute("hidden")
                return
            }

            // save data to JSON object
            form_data.p_number = data;
            f_error.setAttribute("hidden", "hidden");
            f_error.textContent = "";

            zip()
        break;
    }
        case "ZIP": {
            e.preventDefault();
            let regex = /^[0-9]{5}$/

            let data = document.querySelector("#z-i-p").value;
            if (!regex.test(data)){
                f_error.textContent = "Please enter valid 5 digit ZIP code"
                f_error.removeAttribute("hidden")
                return
            }

            // save data to JSON object
            form_data.zip_code = data;
            f_error.setAttribute("hidden", "hidden");
            f_error.textContent = "";
            stormdate()
        break;
    }
        case "stormDate": {
            e.preventDefault();
            let data = document.querySelector("#storm-date").value;
            form_data.storm_date = data;
            stormtype()
        break;
    }
        case "stormType": {
            e.preventDefault();

            let data = document.querySelector("#storm-type").selectedIndex;
            
            if(data == null || data == -1){
                f_error.textContent = "Please select a user danger level"
                f_error.removeAttribute("hidden")
                return
              }


            form_data.storm_type = data;
            stormseverity()
        break;
    }
        case "stormSeverity": {
            e.preventDefault();
            let data = document.querySelector("#storm-severity").value;
            form_data.storm_sev = data;
            stormregion()
        break;
    }
        case "stormRegion": {
            e.preventDefault();
            let data = document.querySelector("#storm-region").selectedIndex;
            
            if(data == null || data == -1 || data == 0){
                f_error.textContent = "Please select a user danger level"
                f_error.removeAttribute("hidden")
                return
              }

            form_data.storm_reg = data;
            dangerlevel()
        break;
    }
        case "dangerLevel": {
            e.preventDefault();

            options = document.querySelectorAll('input[name="dangerLevel"]');
            let data;
            for (i = 0; i < options.length; i++) {
                let rb = options[i];
            if (rb.checked) {
                data = rb.value;
            break;
                  }
              }
            if(data == null){
                f_error.textContent = "Please select a user danger level"
                f_error.removeAttribute("hidden")
                return
              }

            form_data.danger_lvl = data;
            f_error.setAttribute("hidden", "hidden");
            f_error.textContent = "";
            comments()
        break;
    }
        case "Comments": {
            e.preventDefault();
            let data = document.querySelector("#add-comments").value;
            form_data.danger_lvl = data;
            thankyou()
        break;
    }
        default: break;
    }
}
submit.addEventListener('click', buttonHandler);