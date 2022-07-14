const precioTicket = 200;

function resumir(){
    var cantidadTicket = document.getElementById('inputCantidad').value;
    var descuento = document.getElementById('inputCategoria').value;

    var precio = cantidadTicket * (precioTicket - ((precioTicket * descuento) / 100));

    document.getElementById('compraTotal').value = "Total a pagar: $" + precio;
}