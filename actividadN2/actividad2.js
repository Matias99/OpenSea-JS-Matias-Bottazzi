const productos = [
    {
        id: 1,
        nombre: "Axe",
        imagen: 0,
        precio: 0.003,
        stock: 10,
    },
    {
        id: 2,
        nombre: "Lulus",
        imagen: 0,
        precio: 0.003,
        stock: 10,
    },
    {
        id: 3,
        nombre: "Worky",
        imagen: 0,
        precio: 0.003,
        stock: 10,
    }
]

// Creo una funcion para agregar productos al carrito
const agregarProductos = ({nombre, imagen, precio, stock}) => {
    productos.push({id: 4, nombre, imagen, precio, stock}); // Esto me permite agregar un elemento al final del array de objetos
}

// Creo una funcion y dentro un for of para que genere un recorrido dentro del array
const mostrarProductos = () => {
    let mensajeInfo = "";
    for(let producto of productos){ // Utilizo el bucle for para recorer los elementos de mi array
        mensajeInfo += 
        `
        ID: ${producto.id}
        Nombre: ${producto.imagen}
        Precio: ${producto.precio}
        Stock: ${producto.stock}
        `
    } 
    console.log(mensajeInfo);
};

// Creo una funcion para pedirle los datos al usuario
const solicitarDatosDelProducto = () => {
    let nombreNft = prompt("Ingresa el Nombre del NFT");
    let imagenNft = prompt("Por favor ingresa la URL del NFT");
    let precioNft = parseFloat(prompt("Ingrese el precio del NFT en ETH: "));
    let stockNft = parseInt(prompt("Por favor ingresa la cantidad de unidades disponibles del NFT"));

    if(nombreNft && !isNaN(precioNft) && imagenNft && !isNaN(stockNft)) {
        return { nombre: nombreNft, precio: precioNft, imagen: imagenNft, stock: stockNft };
    } else {
        alert("Por favor ingresa datos validos")
    }

};

// Creo una funcion para eliminar los productos
const eliminarProducto = (nombre) => {
    const indice = productos.findIndex((producto) => producto.nombre.toLocaleLowerCase() === nombre.toLowerCase()); // Devuelve el indice del primer elemento de un array que cumple con la funcion de prueba proporcionada
    if(indice !== -1){
        productos.splice(indice, 1);
        console.log(`Producto ${nombre} eliminado con exito`);
        mostrarProductos(); // Llamo a la funcion mostrarProductos() para mostrar el array actualizado
    } else {
        alert(`Producto ${nombre} no encontrado`);
    }
};

const filtrarOfertas = (precioMaximo) => {
    const productosBaratos = productos.filter((producto) => producto.precio < precioMaximo); // Utilizo la funcion de orden superior filter para filtrar los elementos dentro del array menores al precio ingresado
    
    if(productosBaratos.length > 0){
        console.log(`Productos mas baratos ${precioMaximo} : `);
        productosBaratos.map((producto) => {
            console.log(producto.nombre);
        })
    } else {
        console.log(`No hay productos mas baratos que ${precioMaximo}`);
    }
};

const main = () => {
    
    let opcion = "";
    while(opcion !== "5" || opcion !== "Salir"){
    
    opcion = prompt("Selecciona una opcion: \n1. Agregar Productos \n2. Ver Productos \n3. Eliminar Producto \n4. Encontrar Ofertas \n5. Salir");
        
   // El switch lo utilizo para evaluar casos especificos
    switch(opcion){
        case "1":
            const nuevoProducto = solicitarDatosDelProducto(); // Llamo a esta funcion para obtener los datos del producto
            if(nuevoProducto){
                agregarProductos(nuevoProducto);
            }
            break;
        case "2":
            mostrarProductos();
            break;
        case "3":
            const productoEliminar = prompt("Ingresa el nombre del producto que desea eliminar");
            eliminarProducto(productoEliminar);
            break;
        case "4":
            const precioMaximo = parseFloat(prompt("Ingresa el precio maximo para encontrar NFTs en oferta"));
            encontrarProductoEnOferta(precioMaximo);
            break;            
        case "5":
            console.log("Saliendo..");
            break;
        default:
            alert("Opcion no valida. Por favor seleccione nuevamente");
    }
    }
    
};

main();
