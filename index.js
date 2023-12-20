var time = new Date();

function update_time() {
    document.getElementById("hours").textContent=time.getHours();
    document.getElementById("minutes").textContent=time.getMinutes();
    document.getElementById("seconds").textContent=time.getSeconds();
}