"use strict";
function clock() {
    let dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let hrs = document.getElementById("hours");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let periads = document.getElementById("AmPm");
    let day = document.getElementById("day");
    let date = document.getElementById("ddmmyy");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let D = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    console.log(mm);
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    let ampm = h <= 12 ? "AM" : "PM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    periads.innerHTML = ampm;
    day.innerHTML = dayNames[D];
    date.innerHTML = month[mm] + " " + dd + ", " + yy;
}
setInterval(clock, 1000);
