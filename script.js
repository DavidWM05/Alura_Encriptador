//Variables
const btn_encriptar = document.getElementById("encriptar");
const btn_desencriptar = document.getElementById("desencriptar");
const btn_copiar = document.getElementById("copiar");
const txt_area1 = document.getElementById("txt_area1");
const txt_area2 = document.getElementById("txt_area2");
const div_msg = document.getElementById("mensaje");

//Eventos
btn_encriptar.addEventListener("click", function () {
	let contenido = txt_area1.value;
	let contenidoEn = "";

	//Encripta si text_area1 no esta vacio
	if (contenido.length != 0){
		for (let i = 0; i < contenido.length; i++) {
			switch(contenido[i]){
				case "a": 	contenidoEn += "ai"; 
				break;
				case "e": 	contenidoEn += "enter";
				break;
				case "i":  	contenidoEn += "imes";
				break;
				case "o": 	contenidoEn += "ober";
				break;
				case "u": 	contenidoEn += "ufat";
				break;
				default: 	contenidoEn += contenido[i];
				break;
			}
		}

		//mensaje encriptado
		txt_area2.value = contenidoEn;

		//display
		div_msg.style.display = "none";
		txt_area2.style.display = "block";
		btn_copiar.style.display = "block";
	}
});

btn_desencriptar.addEventListener("click", function () {
	let contenidoEn = txt_area1.value;
	let contenidoDes = "";

	//Desencripta si text_area1 no esta vacio
	if (contenidoEn.length != 0){
		for (let i = 0; i < contenidoEn.length; i++) {
			switch(contenidoEn[i]){
				case "a": 	contenidoDes += "a"; i+=1;
				break;
				case "e": 	contenidoDes += "e"; i+=4;
				break;
				case "i":  	contenidoDes += "i"; i+=3;
				break;
				case "o": 	contenidoDes += "o"; i+=3;
				break;
				case "u": 	contenidoDes += "u"; i+=3;
				break;
				default: 	contenidoDes += contenidoEn[i];
				break;
			}
		}

		//Mensaje desencriptado
		txt_area2.value = contenidoDes;

		//display
		div_msg.style.display = "none";
		txt_area2.style.display = "block";
		btn_copiar.style.display = "block";
	}
});

btn_copiar.addEventListener('click',function () {				
	txt_area2.select();
	document.execCommand("copy");
	alert("texto en portapapeles");
	txt_area2.value ="";
	txt_area1.value ="";

	//display
	div_msg.style.display = "flex";
	txt_area2.style.display = "none";
	btn_copiar.style.display = "none";
});