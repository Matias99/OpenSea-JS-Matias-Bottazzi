// <!-- Calcular valor final de un producto seleccionado en funcion de impuestos y descuentos -->

/* <!-- Descuentos -->

    0 a $100 --> 5%
    100 a $300 --> 10%
    300 a $500 --> 15%
    mayor a $500 --> 20% */

/* <!-- Impuestos -->

    Tarjeta Debito/Credito --> 21%
    Efectivo --> 10% */



// Declaro e Inicializo variables
let subTotal = 0;
let precioConImpuesto;
let precioDeLista;
let contador = 1;



// Creo una funcion para calcular el descuento que se le aplica a cada producto dependiendo el precio del mismo 
// Creo funciones distintas para practicar las distintas variantes
let descuento = function (precioDeLista, desc) {
    return precioDeLista - (precioDeLista * desc);
}

// Creo una funcion para calcular el impuesto que se le debe aplicar teniendo en cuenta le metodo de pago elegido
function impuestos (subTotal, imp) {
    let impuestoAplicado = subTotal * imp;
    return impuestoAplicado;
}

// Creo un while para que el usuario pueda ingresar la cantidad de precio de productos que quiera hasta que desee finalizar la compra


while(true){
    let precioDeLista = prompt(`-> Ingrese el precio del Producto N ${contador} \n-> Para finalizar la compra ingrese "salir".`);

    if(precioDeLista == 'salir') {
        break;
    }

    let precio = parseFloat(precioDeLista);

    if(isNaN(precio)) {
        alert("Ingrese un dato valido!");
    } else if(precio > 1 && precio <= 100) {
        let precioConDescuento = descuento(precio, 0.05);
        subTotal += precioConDescuento;
        contador++;
    } else if(precio > 100 && precio <= 300) {
        let precioConDescuento = descuento(precio, 0.1);
        subTotal += precioConDescuento;
        contador++;
    } else if(precio > 300 && precio <= 500) {
        let precioConDescuento = descuento(precio, 0.15);
        subTotal += precioConDescuento;
        contador++;
    } else if (precio > 500){
        let precioConDescuento = descuento(precio, 0.2);
        subTotal += precioConDescuento;
        contador++;
    } else {
        alert("Por favor ingrese un precio mayor a 0")
    }
}


// Le consulto al usuario con que metodo de pago desea abonar para calcular el impuesto correspondiente
let metodoDePago = prompt("De que manera desea abonar? \n a) Tarjeta de Debito / Tarjeta de Credito (21%) \n b) Efectivo (10%)");

if(metodoDePago == 'a' || metodoDePago == 'Tarjeta de Debito' || metodoDePago == 'Tarjeta de Credito'){
    precioConImpuesto = impuestos(subTotal, 0.21);
} else if(metodoDePago == 'b' || metodoDePago == 'Efectivo'){
    precioConImpuesto = impuestos(subTotal, 0.10);
} else {
    alert("Ingrese una de las opciones validas!");
}

// Genero el calculo del precio total de la compra
let total = subTotal + precioConImpuesto;
let imp = precioConImpuesto;
alert(`--> Precio con descuento: $${subTotal} \n--> Impuesto Aplicado: $${imp} \n\nTotal: \n--> Precio Total de su compra: $${total}`);




