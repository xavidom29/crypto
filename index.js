//  FUNCIONES
function getCryptoInfo(nombrecrypto) {
  const requester = new XMLHttpRequest();
  requester.onreadystatechange = function() {
    if (this.readyState != 4) {
      return
    }
    if (this.status == 200) {
      var data = JSON.parse(this.responseText)[0];

      mostrarInfo(data)
    }
  };
  requester.open('GET', "https://api.coinlore.com/api/tickers/?id=" + nombrecrypto);
  requester.send();
}

function mostrarInfo(cryptocurrency) {
  console.log(cryptocurrency);
  document.querySelectorAll('#contenedor')[0].innerHTML = "<div>Name: " + cryptocurrency.nombrecrypto;
}

// VARIABLES
const botonAñadir = document.querySelectorAll('#boton')[0];
let global = [];

// BINDS Y EVENTOS


botonAñadir.addEventListener('click', function() {
  let nombreCrypto = document.querySelectorAll('#input')[0].value;
  getCryptoInfo(nombreCrypto);
})
