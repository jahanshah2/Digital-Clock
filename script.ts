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

  let hrs: any = document.getElementById("hours");
  let min: any = document.getElementById("min");
  let sec: any = document.getElementById("sec");
  let periads: any = document.getElementById("AmPm");
  let day: any = document.getElementById("day");
  let date: any = document.getElementById("ddmmyy");

  let time = new Date();
  let h: number | string = time.getHours();
  let m: number | string = time.getMinutes();
  let s: number | string = time.getSeconds();
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

  let ampm = h >= 12 ? "AM" : "PM";

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
