setInterval(() => {
    let day = new Date();

    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();
    

    let time = document.querySelector(".content span");

    let hours = hour < 10 ? "0" + hour : hour;
    let minutes = minute < 10 ? "0" + minute : minute;
    let seconds = second < 10 ? "0" + second : second;

    time.innerHTML = hours + ":" + minutes + ":" + seconds;

});