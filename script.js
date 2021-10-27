const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const datafinal = "1 Jan 2022";

function contador() {
    const DataFinal = new Date(datafinal);
    const DataAtual = new Date();

    const totalsegundos = (DataFinal - DataAtual) / 1000;
    const dias = Math.floor(totalsegundos / 3600 / 24);
    const horas = Math.floor(totalsegundos / 3600) % 24;
    const minutos = Math.floor(totalsegundos / 60) % 60;
    const segundos = Math.floor(totalsegundos) % 60;

    diasEl.innerHTML = formato(dias);
    horasEl.innerHTML = formato(horas);
    minutosEl.innerHTML = formato(minutos);
    segundosEl.innerHTML = formato(segundos);
}

function formato(time) {
    return time < 10 ? ('0' + time) : time;

}

contador();

setInterval(contador, 1000);
setInterval(contador, 1000);