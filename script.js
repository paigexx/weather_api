var current_q = ""
var appid = "10be953ca29615b40b69f861711e0b54"
var right_col = document.querySelector("#right_col")
var left_col = document.querySelector("#left_col")
var units = ""
var no_result_p = document.querySelector("#not_activated")
var city_header = document.querySelector("#city_header")
var icon = ""



function get_q(element){
    current_q = element.value
    console.log(current_q)
}

function define_units(element){
    units = element.value
    console.log (units)

}

function remove(){
    no_result_p.remove()
}

function city_header_section(data){
    var icon = data['weather'][0]['icon']
    var title_img = `<h1>${current_q}</h1>
                    <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">`
    return icon, title_img
}


function left_col_content(data){
    var res_left=   `<div class="weather_content_container">
                        <p>City: ${data.name}</p> 
                        <p>Main: ${data['weather'][0]['main']}</p>
                        <p>Current Temp: ${data.main.temp}</p>        
                    </div>`
    return res_left

}

function right_col_content(data){
    var res_right = `<div>
                    <p>High: ${data.main.temp_max}</p>
                    <p>Low: ${data.main.temp_min} </p>
                    <p>Feels Like: ${data.main.feels_like}</p>
                </div>`
    return res_right
}

async function search(){

    var response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + current_q + "&units=" + units + "&appid=10be953ca29615b40b69f861711e0b54") 
    var weather_data = await response.json()
    console.log(weather_data)
    city_header.innerHTML = city_header_section(weather_data)
    right_col.innerHTML = right_col_content(weather_data)
    left_col.innerHTML = left_col_content(weather_data)
    

}

