const sobre = document.getElementById("sobre");

function crearPetalo() {

    const petalo = document.createElement("img");

    petalo.src = "img/petalo.png";

    petalo.classList.add("petalo");

    petalo.style.left =
        Math.random() * window.innerWidth + "px";

    petalo.style.width =
        (15 + Math.random() * 20) + "px";

    petalo.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 10000);
}

sobre.addEventListener("click", () => {

    const pantalla = document.getElementById("pantalla-inicial");

    pantalla.style.opacity = "0";

    setInterval(crearPetalo, 700);

    setTimeout(() => {

        pantalla.style.display = "none";

        document.getElementById("invitacion").style.display = "block";

    }, 1000);

    const fechaXV = new Date("July 25, 2026 14:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaXV - ahora;

    const dias =
        Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas =
        Math.floor(
            (diferencia % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutos =
        Math.floor(
            (diferencia % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const segundos =
        Math.floor(
            (diferencia % (1000 * 60))
            / 1000
        );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarContador,1000);

actualizarContador();
});