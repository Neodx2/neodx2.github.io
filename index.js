function update_time() {
    var time = new Date();

    document.getElementById("hours").innerHTML = time.getHours();
    document.getElementById("minutes").innerHTML = time.getMinutes();
    document.getElementById("seconds").innerHTML = time.getSeconds();
}