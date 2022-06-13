document.querySelector("dodaj").onclick = function() {
    let zdanie = document.querySelector("p");
    zdanie.textContent = "Jakis teskt";
}

document.querySelector("usun").onclick = function() {
    let usunZdanie = document.querySelector("p");
    usunZdanie.remove();
}