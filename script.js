function sendMessage() {
    const name = document.getElementById("name").value;
    document.getElementById("success").innerHTML =
        "Halo " + name + ", pesanmu berhasil terkirim! 😊";
    return false;
}

// Dark Mode Toggle
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.textContent = 
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
