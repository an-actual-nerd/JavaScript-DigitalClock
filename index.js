function showDay(){
    let d = new Date();

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let get_month = months[d.getMonth()];

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"];
    let get_weekday = weekday[d.getDay()];

    let get_date = d.getDate();

    let get_year = d.getFullYear();

    let get_hour = d.getHours();
    let get_min = d.getMinutes();
    let get_sec = d.getSeconds();
    am_pm = "AM"

    if (get_hour > 12) {
        get_hour -= 12;
        am_pm = "PM"
    }

    if (get_hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    get_hour = get_hour < 10 ? "0" + get_hour : get_hour;
    get_min = get_min < 10 ? "0" + get_min : get_min;
    get_sec = get_sec < 10 ? "0" + get_sec : get_sec;

    let current = get_weekday + " " + get_date + " " + get_month + "," + " " + get_year + " " 
        + get_hour + ":" + get_min + ":" + get_sec;

    document.getElementById("showday").innerHTML = current;
}

setInterval(showDay, 1000);