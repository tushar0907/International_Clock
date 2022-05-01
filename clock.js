const currentTime = () => {
  //Creating time reletd function for only mobile view
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dd = weekday[date.getDay()];

  if (hh > 17 && hh < 20) {
    //created this to change the wallpaper as per time changes
    document.getElementById("main-box").style.backgroundImage =
      "url('https://w0.peakpx.com/wallpaper/39/763/HD-wallpaper-sunset-lake-view-sunrise.jpg')";
  } else if (hh >= 20 || hh === 3) {
    document.getElementById("main-box").style.backgroundImage =
      "url('https://iphoneswallpapers.com/wp-content/uploads/2018/07/City-View-Evening-Sunset-Clouds-iPhone-Wallpaper-469x832.jpg')";
  } else if (hh >= 4 && hh < 11) {
    document.getElementById("main-box").style.backgroundImage =
      "url('https://i.pinimg.com/564x/18/b7/c4/18b7c4bbe7fca8f6a318ae76b00199c7.jpg')";
  } else {
    document.getElementById("main-box").style.backgroundImage =
      "url('https://i.pinimg.com/564x/d3/8b/4a/d38b4a8e4aaba29b8952c32243089c27.jpg')";
  }

  if (hh >= 4 && hh <= 20) {
    //It will change the small sun or moon symbol as per Day or Night
    document.getElementById("symbol").style.backgroundImage =
      "url('http://www.simpleimageresizer.com/_uploads/photos/813fdd3c/sun-131979013495145260_23x24.png')";
  } else {
    document.getElementById("symbol").style.backgroundImage =
      "url('./night.jpg')";
  }

  if (hh > 12) {
    //Condition for PM
    session = "PM";
  }

  if (hh >= 0 && hh < 12) {
    //Greeting condition When Morning, Afternoon, Evening or Night appears as per situation
    document.getElementById("greet").innerHTML =
      "Good Morning!, It's Currently";
  } else if (hh == 12) {
    document.getElementById("greet").innerHTML = "Good Noon!, It's Currently";
  } else if (hh >= 12 && hh <= 17) {
    document.getElementById("greet").innerHTML =
      "Good AfterNoon!, It's Currently";
  } else if (hh >= 17 && hh <= 20) {
    document.getElementById("greet").innerHTML =
      "Good Evening!, It's Currently";
  } else {
    document.getElementById("greet").innerHTML = "Good Night!, It's Currently";
  }

  hh = hh < 10 ? "0" + hh : hh; // Ternary operator, if the Decimal place in hour hand changes from 0 to 1
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = // Arranging it to display time accurately as per hh/mm/ss
    hh + ":" + mm + ":" + ss + "<br>" + "\xa0\xa0\xa0\xa0\xa0\xa0" + session;

  document.getElementById("clock").innerHTML = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);

  document.getElementById("day-box").innerHTML = "Hii, Today is" + " " + dd; //Tells the Weekday accordingly
};

currentTime();

const correctDur = () => {
  //Function for Desktop View
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hh > 12) {
    session = "PM";
  }
  hh = hh < 10 ? "0" + hh : hh; //Ternary Operator for certain condition
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + "\xa0\xa0" + "IST";

  document.getElementById("duration").innerHTML = time;
  let t = setTimeout(function () {
    correctDur();
  }, 1000);

  if (hh >= 0 && hh < 12) {
    // Greeting you according to Time of the Day
    document.getElementById("welcome").innerHTML =
      "Good Morning!, It's Currently";
  } else if (hh == 12) {
    document.getElementById("welcome").innerHTML = "Good Noon!, It's Currently";
  } else if (hh >= 12 && hh <= 17) {
    document.getElementById("welcome").innerHTML =
      "Good AfterNoon!, It's Currently";
  } else if (hh >= 17 && hh <= 20) {
    document.getElementById("welcome").innerHTML =
      "Good Evening!, It's Currently";
  } else {
    document.getElementById("welcome").innerHTML =
      "Good Night!, It's Currently";
  }
  if (hh > 17 && hh < 20) {
    // Wide wallpaper changes according to Day and Night
    document.getElementById("wide-range").style.backgroundImage =
      "url('https://wallpaperaccess.com/full/3163001.jpg')";
  } else if (hh >= 20 || hh === 3) {
    document.getElementById("wide-range").style.backgroundImage =
      "url('https://cdn.wallpapersafari.com/93/98/tJzUld.jpg')";
  } else if (hh >= 4 && hh < 11) {
    document.getElementById("wide-range").style.backgroundImage =
      "url('https://wallpaperaccess.com/full/827043.jpg')";
  } else {
    document.getElementById("wide-range").style.backgroundImage =
      "url('https://images.wallpaperscraft.com/image/single/lake_mountains_forest_152659_1920x1080.jpg')";
  }

  if (hh >= 4 && hh <= 20) {
    document.getElementById("automatic-logo").style.backgroundImage = //changes the small sun or moon logo accordingly
      "url('http://www.simpleimageresizer.com/_uploads/photos/d392486a/5322c2cad533e12e552d0dfdc89b4c25_50x50.png')";
  } else {
    document.getElementById("automatic-logo").style.backgroundImage =
      "url('./moon.webp')";
  }
};
correctDur();
