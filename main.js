//Guardar el estado columna activa 

let columnaActiva = 1;

//seleccionar las columnas 

const columnas = document.querySelectorAll(".columna");

//escuhchar los clicks en cada una de ellas

columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function(){
        cambiarEstado(indice);
    })  
})

//cambiar el estado de las columnas

function cambiarEstado(indice){
    columnas[columnaActiva].classList.remove("activa");
    columnas[indice].classList.add("activa");
    columnaActiva = indice;
}