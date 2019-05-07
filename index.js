//  FUNCIONES
function getCryptoInfo(nombrecrypto) {
  const requester = new XMLHttpRequest();
    requester.onreadystatechange = function() {
    if (this.readyState != 4) {
      return
    }
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);

      mostrarInfo(data, nombrecrypto)
    }
  };
  requester.open('GET', "https://cors-anywhere.herokuapp.com/https://api.coinlore.com/api/tickers/");
  requester.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  requester.send();
}

function mostrarInfo(monedas, nombreMoneda) {
  console.log(nombreMoneda);
  console.log(monedas);
  let monedaEscogida = {};

  for (var i = 0; i < monedas.data.length; i++) {
    if (monedas.data[i].name == nombreMoneda) {
      console.log(monedaEscogida);
      monedaEscogida = monedas.data[i];
    }
  }
  document.querySelectorAll('#contenedor')[0].innerHTML = "<div>Name: " + monedaEscogida.name + "<div>Symbol: " + monedaEscogida.symbol + "<div>Price : " + monedaEscogida.price_usd + " $" + "<div>Rank : " + monedaEscogida.rank + "<div>Marquet Capital : " + monedaEscogida.market_cap_usd;
}

// VARIABLES
const botonAñadir = document.querySelectorAll('#boton')[0];

// BINDS Y EVENTOS

botonAñadir.addEventListener('click', function() {
  let nombreCrypto = document.querySelectorAll('#input')[0].value;
  getCryptoInfo(nombreCrypto);
})
