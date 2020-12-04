const submitbtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityName");
var city = document.getElementById("city");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
var day = document.getElementById('day');
const date = document.getElementById("date");
const time = document.getElementById("time");
const midarea = document.getElementById("mid");

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const getdata = async(event) => {
    event.preventDefault();


    if (cityName.value == "") {

        city.innerText = "Enter a city"
    } else {
        const cityval = cityName.value;
        console.log(city);
        try {
            let url = (`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=e4a63892684c11ddca0997b5e4ca7787`);
            const response = await fetch(url);

            const data = await response.json();
            const arrdata = [data];
            console.log(arrdata);

            city.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
            temp.innerHTML = `${arrdata[0].main.temp} `;
            midarea.classList.remove("data_hide");

            let tempstatus = arrdata[0].weather[0].main;
            if (tempstatus == "Sunny") {
                icon.innerHTML = '<i class="fas fa-sun" style = "color:#FFC300 "></i>';
            } else if (tempstatus == "Clouds") {
                icon.innerHTML = '<i class="fas fa-cloud" style="color:#F5F3F3 "></i>';
            } else if (tempstatus == "Rain") {
                icon.innerHTML = '<i class="fas fa-cloud-rain style = "color:#F5F3F3"></i>';
            } else {
                icon.innerHTML = '<i class="fas fa-cloud" style="color:#F5F3F3 "></i>';
            }


            let current = new Date();
            let hr = current.getHours();
            let min = current.getMinutes();

            if (min < 10) {

                min = `0${min}`;
            }

            if (hr == 12) {
                time.innerHTML = `${hr}:${min} PM`;
            } else if (hr > 12) {
                time.innerHTML = `${hr-12}:${min} PM`;
            } else {
                if (hr == 0) {
                    hr = 12;
                }
                time.innerHTML = `${hr}:${min} AM`;
            }

            day.innerText = weekdays[current.getDay()];

            date.innerHTML = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;

        } catch {
            midarea.classList.add("data_hide");
            city.innerText = "Enter a valid city"

        }


    }
}

submitbtn.addEventListener("click", getdata);