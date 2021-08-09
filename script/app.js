//SLP Binance Stream
let ws = new WebSocket('wss://stream.binance.com:9443/ws/slpusdt@trade');
let stockPriceElement = document.getElementById('stock-price');
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(4);
    stockPriceElement.innerText = price;

    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'rgb(0, 200, 0)' : 'rgb(255, 70, 70)';

    lastPrice = price;
}

//fixed action button
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
});

//music control
let audio = document.getElementById('bg-music');

function pause() {
    audio.pause();
}

function play() {
    audio.play();
}

//volume
audio.volume = 0.3;

