let EuroDolar = document.getElementById("EuroDolar");
let BitcoinDolar = document.getElementById("BitcoinDolar");
let ArsDolar = document.getElementById("ArsDolar");
let pantallaCarga = document.getElementById("carga");
let portada = document.getElementById("portada");
let titulo = document.getElementById('titulo');

function cargarPagina() {
    obtenerDatosApi();
    cargarElementos();
}

async function obtenerDatosApi() {
    await delay(2500);
    
    let dolarEuro = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosDolarEuro = await dolarEuro.json();

    let dolarBitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let datosDolarBitcoin = await dolarBitcoin.json();

    let dolarArs = await fetch('https://open.er-api.com/v6/latest/ARS');
    let datosDolarArs = await dolarArs.json();
    pantallaCarga.style.display = "none";

    EuroDolar.append("EUR a USD: " + datosDolarEuro.rates.EUR);
    BitcoinDolar.append("Bitcoin a USD: " + datosDolarBitcoin.bpi.USD.rate);
    ArsDolar.append("ARG a USD: " + datosDolarArs.rates.USD);    
}

function cargarElementos() {
    portada.setAttribute('src', "./src/banner.jpg");
    titulo.textContent = "Cotizaciones";
}

function delay(ms) {
    return new Promise(function(res) {
        setTimeout(res, ms);
    })
}