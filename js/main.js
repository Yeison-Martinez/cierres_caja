

var boton = document.getElementById("calcular");
boton.addEventListener('click', calc);

function Separador(numero) {
    let partesNumero = numero.toString().split('.');

    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return partesNumero.join('.');
}

function calc() {
   
    var  fecha = document.getElementById("fecha").value;
    var  cajero = document.getElementById("cajero").value;
    var  btnImprimir = document.getElementById("imprimir");
    // const mensaje = document.getElementById('mensaje');


    if ( fecha !== "") {
        
        if (cajero !== "") {

            btnImprimir.style.visibility = "visible";

            // CANTIDAD DE BILLETES - inputs
            var cant__bill100k = document.getElementById("cant__bill100k");
            var cant__bill50k = document.getElementById("cant__bill50k");
            var cant__bill20k = document.getElementById("cant__bill20k");
            var cant__bill10k = document.getElementById("cant__bill10k");
            var cant__bill5k = document.getElementById("cant__bill5k");
            var cant__bill2k = document.getElementById("cant__bill2k");
            var cant__bill1k = document.getElementById("cant__bill1k");
            
            //  TOTAL DE CADA DENOMICACION - span
            var ttl__bill100k = document.getElementById("total__bill100k");
            var ttl__bill50k = document.getElementById("total__bill50k");
            var ttl__bill20k = document.getElementById("total__bill20k");
            var ttl__bill10k = document.getElementById("total__bill10k");
            var ttl__bill5k = document.getElementById("total__bill5k");
            var ttl__bill2k = document.getElementById("total__bill2k");
            var ttl__bill1k = document.getElementById("total__bill1k");

            // billetes de 100k
            var bill100 = parseFloat(cant__bill100k.value);
            var vlr__bill100k = bill100 * 100000;
            var vlrBill100_s = Separador(vlr__bill100k);
            ttl__bill100k.innerHTML = `$ ${vlrBill100_s}`;

            // billetes de 50k
            var bill50 = parseFloat(cant__bill50k.value);
            var vlr__bill50k = bill50 * 50000;
            var vlrBill50_s = Separador(vlr__bill50k);
            ttl__bill50k.innerHTML = `$ ${vlrBill50_s}`;

            // billetes de 20k
            var bill20 = parseFloat(cant__bill20k.value);
            var vlr__bill20k = bill20 * 20000;
            var vlrBill20_s = Separador(vlr__bill20k);
            ttl__bill20k.innerHTML = `$ ${vlrBill20_s}`;

            // billetes de 10k
            var bill10 = parseFloat(cant__bill10k.value);
            var vlr__bill10k = bill10 * 10000;
            var vlrBill10_s = Separador(vlr__bill10k);
            ttl__bill10k.innerHTML = `$ ${vlrBill10_s}`;

            // billetes de 5k
            var bill5 = parseFloat(cant__bill5k.value);
            var vlr__bill5k = bill5 * 5000;
            var vlrBill5_s = Separador(vlr__bill5k);
            ttl__bill5k.innerHTML = `$ ${vlrBill5_s}`;

            // billetes de 2k
            var bill2 = parseFloat(cant__bill2k.value);
            var vlr__bill2k = bill2 * 2000;
            var vlrBill2_s = Separador(vlr__bill2k);
            ttl__bill2k.innerHTML = `$ ${vlrBill2_s}`;

            // billetes de 1k
            var bill1 = parseFloat(cant__bill1k.value);
            var vlr__bill1k = bill1 * 1000;
            var vlrBill1_s = Separador(vlr__bill1k);
            ttl__bill1k.innerHTML = `$ ${vlrBill1_s}`;

            //  TOTAL EFECTIVO
            var ttl__efect = document.getElementById("total__efectivo");
            var ttl__billetes = vlr__bill100k + vlr__bill50k + vlr__bill20k + vlr__bill10k + vlr__bill5k + vlr__bill2k + vlr__bill1k;
            var ttlBilletes_s = Separador(ttl__billetes);
            ttl__efect.innerHTML = `$ ${ttlBilletes_s}`;

        // PLASTICO
        var ttl__plas = document.getElementById("total__plas");
        var ttl__plastico = parseFloat(ttl__plas.value);
        var ttl_plas__s = Separador(ttl__plas.value);
        ttl__plas.value = `${ttl_plas__s}`;

        // TOTAL VENTA
        var ttl__venta = document.getElementById("total__venta");
        var  ttl__vent = 0;
        ttl__vent = ttl__billetes + ttl__plastico;
        var ttlVenta_s = Separador(ttl__vent);
        ttl__venta.innerHTML = `$ ${ttlVenta_s}`;

        // TOTAL DEL DENOMICACION
        var ttl__dia = document.getElementById("total__dia");
        ttl__dia.innerHTML = `$ ${ttlVenta_s}`;

        } else {
            alert( 'Por favor, ingresa un nombre.');
        }

    } else {
        alert('Por favor, ingresa una fecha válida.');
    }

}




