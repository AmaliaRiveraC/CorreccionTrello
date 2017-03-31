var listas = [];

function agregarLista(){
	var lista = document.createElement("section");
	var h3 = document.createElement("h3");
	h3.innerHTML = document.getElementById("tituloLista").value;
	lista.appendChild(h3);
	var padreContenedor = document.createElement("article");
	padreContenedor.appendChild(seccionContenedor);

	console.log(seccionContenedor);
	console.log(h3);
	//mostrarListaEnHTML();
}

function crearInputText(){
	/*En esta líneas de código se crea el elemento input de manera dinámica, donde el usuario ingresara sus  tareas pendientes */
	var inputTexto = document.createElement("input");
	
}

function crearBotonAgregarPendiente() {
	var inputBoton = document.createElement("input");
	input.id
	seccionContenedor.appendChild(inputBoton);
}

/*function mostrarListaEnHTML(){
	var 

}*/

