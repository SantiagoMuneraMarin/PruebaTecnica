var db=openDatabase("usuariosDB","1.0","usuariosDB", 65535)

var modal = document.getElementById("modalok");
var span = document.getElementsByClassName("close")[0];

function modalok() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function limpiar(){
	document.getElementById("departamento").value="";
	document.getElementById("ciudad").value="";
	document.getElementById("nombre").value="";
	document.getElementById("correo").value="";

}

function crear(){
		db.transaction(function(transaction){
			var sql="CREATE TABLE visitante"+
			"(ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "+
			"departamento VARCHAR(30) NOT NULL, "+
			"ciudad VARCHAR(50) NOT NULL, "+
			"nombre VARCHAR(50) NOT NULL, "+
			"correo VARCHAR(30) NOT NULL)";
			transaction.executeSql(sql,undefined,function(){
				//alert("Tabla creada exitosamente");
			},function(transaction,err){
				//alert(err.message);
			})
		})
	}

crear();

function IngrsarDatos(){

		var departamento =$("#departamento").val();
		var ciudad =$("#ciudad").val();
		var nombre =$("#nombre").val();
		var correo =$("#correo").val();

		if(departamento==null){
			alert("Seleccione un departamento");
		}else if(ciudad==null){
			alert("Seleccione una ciudad");
		}else if(nombre=="" || nombre==null){
			alert("Ingrese un nombre");
		}else if(correo=="" || nombre==null){
			alert("Ingrese un correo");
		}else{

		db.transaction(function(transaction){
			var sql="INSERT INTO visitante(departamento,ciudad,nombre,correo) VALUES(?,?,?,?)";
			transaction.executeSql(sql,[departamento,ciudad,nombre,correo],function(){
			},function(transaction,err){
				alert(err.message);
			})

		})
		limpiar();
		modalok();

		}
}

/*async function getData() {
  
  const response = await fetch('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json', {
    method: 'GET', 
    mode: 'cors', 
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },

  });
  console.log(response.json().responseText)
}*/


const colombia = [{
  "Amazonas": [
    "Leticia",
    "El encanto",
    "La Chorrera",
    "La Pedrera",
    "Miritiparan??",
    "Puerto Alegr??a",
    "Puerto Arica",
    "Puerto Nari??o",
    "Puerto Santader"
  ],
  "Atl??ntico": [
    "Baranoa",
    "Baranoa",
    "Barranquilla",
    "Campo de la Cruz",
    "Candelar??a",
    "Galapa",
    "San Juan de Acosta",
    "Luruaco",
    "Malambo",
    "Manat??",
    "Palmar de Varela",
    "Piojo",
    "Polo Nuevo",
    "Ponedera",
    "Puerto Colombia",
    "Repel??n",
    "Sabanagrande",
    "Sabanalarga",
    "Santa Luc??a",
    "Santo Tom??s",
    "Soledad",
    "Suan",
    "Tubara",
    "Usiacur??"
  ],
  "Caquet??": [
    "Albania",
    "Bel??n de los Andaqu??es",
    "Cartagena del Chaira",
    "Curillo",
    "El Doncello",
    "El Paujil",
    "Florencia",
    "La Monta??ita",
    "Milan",
    "Morelia",
    "Puerto Rico",
    "San Jos?? de Fragua",
    "San Vicente del Cagu??n",
    "Solano",
    "Solita",
    "Valpara??so"
  ],
  "Cesar": [
    "Aguachica",
    "Agust??n Codazzi",
    "Astrea",
    "Becerril",
    "Bosconia",
    "Chimichagua",
    "Chiriguan??",
    "Curuman??",
    "El Copey",
    "El Paso",
    "Gamarra",
    "Gonz??lez",
    "La Gloria",
    "La Jagua",
    "Ibirico",
    "Manaure",
    "Pailitas",
    "Pelaya",
    "Pueblo Bello",
    "R??o de Oro",
    "Robles la Paz",
    "San Alberto",
    "San Diego",
    "San Mart??n",
    "Tamalameque",
    "Valledupar"
  ],
  "Choc??": [
    "Acandi",
    "Alto Baudo",
    "Atrato",
    "Bagado",
    "Bah??a Solano",
    "Bel??n de bajir??",
    "Bajo Baudo",
    "Bojay??",
    "Cant??n de San Pablo",
    "Carmen del Dari??n",
    "Certegu??",
    "Condoto",
    "El Carmen",
    "Istmina",
    "Jurado",
    "Litoral del San Juan",
    "Llor??",
    "Medio Atrato",
    "Medio Baudo",
    "Medio San Juan",
    "Novita",
    "Nuqu??",
    "Quibd??",
    "R??o Iro",
    "R??o Quito",
    "Riosucio",
    "San Jos?? del Palmar",
    "Sip??",
    "Tado",
    "Ungu??a",
    "Uni??n Panamericana"
  ],
  "C??rdoba": [
    "Ayapel",
    "Buenavista",
    "Canalete",
    "Cerete",
    "Chima",
    "Chinu",
    "Ci??naga de Oro",
    "Cotorra",
    "La Apartada",
    "Lorica",
    "Los C??rdobas",
    "Momil",
    "Mo??itos",
    "Montelibano",
    "Monter??a",
    "Planeta Rica",
    "Pueblo Nuevo",
    "Puerto Escondido",
    "Puerto Libertador",
    "Pur??sima",
    "Sahagun",
    "San Andr??s",
    "Sotavento",
    "San Antero",
    "San Bernardo Viento",
    "San Carlos",
    "San Pelayo",
    "Tierralta",
    "Tuchin",
    "Valencia"
  ],
  "Guain??a": [
    "In??rida",
    "Barranco Minas",
    "Cacahual",
    "La Guadalupe",
    "Mapiripana",
    "Morichal",
    "Pana Pana",
    "Puerto Colombia",
    "San Felipe"
  ],
  "Guaviare": [
    "Calamar",
    "El Retorno",
    "Miraflores",
    "San Jos?? del Guaviare"
  ],
  "Huila": [
    "Acevedo",
    "Agrado",
    "Aipe",
    "Algeciras",
    "Altamira",
    "Baraya",
    "Campoalegre",
    "Colombia",
    "Elias",
    "Garz??n",
    "Gigante",
    "Guadalupe",
    "Hobo",
    "??quira",
    "Isnos",
    "La Argentina",
    "La Plata",
    "Nataga",
    "Neiva",
    "Oporapa",
    "Paicol",
    "Palermo",
    "Palestina",
    "Pital",
    "Pitalito",
    "Rivera",
    "Saladoblanco",
    "San Agust??n",
    "Santa Mar??a",
    "Suaza",
    "Tarqui",
    "Tello",
    "Teruel",
    "Tesalia",
    "Timana",
    "Villavieja",
    "Yaguar??"
  ],
  "La Guajira": [
    "Riohacha",
    "Albania",
    "Barranca",
    "Dibulla",
    "Distracci??n",
    "El Molino",
    "Fonseca",
    "La Jagua del Pilar",
    "Maicao",
    "Manaure",
    "San Juan del Cesar",
    "Urumita",
    "Villa Nueva"
  ],
  "Putumayo": [
    "Col??n",
    "Mocoa",
    "Orito",
    "Puerto As??s",
    "Puerto Caicedo",
    "Puerto Guzman",
    "Leguizamo",
    "San Francisco",
    "San Miguel",
    "Santiago",
    "Sibundoy",
    "Valle del Guamuez",
    "Villagarz??n"
  ],
  "Quind??o": [
    "Armenia",
    "Buenavista",
    "Calarca",
    "Circasia",
    "C??rdoba",
    "Filandia",
    "Genova",
    "La Tebaida",
    "Montenegro",
    "Pijao",
    "Quimbaya",
    "Salento"
  ],
  "San Andr??s y Providencia": [
    "Providencia",
    "San Andr??s y Providencia"
  ],
  "Sucre": [
    "Buenavista",
    "Caimito",
    "Chal??n",
    "Colos??",
    "Cove??as",
    "Corozal",
    "El Roble",
    "Galeras",
    "Guaranda",
    "La Uni??n",
    "Los Palmitos",
    "Majagual",
    "Morroa",
    "Ovejas",
    "Palmito",
    "Sampu??s",
    "San Benito Abad",
    "San Juan de Betulia",
    "San Marcos",
    "San Onofre",
    "San Pedro",
    "Sinc??",
    "Sincelejo",
    "Sucre",
    "Tol??",
    "Toluviejo"
  ],
  "Tolima": [
    "Alpujarra",
    "Alvarado",
    "Ambalema",
    "Anzo??tegui",
    "Ataco",
    "Cajamarca",
    "Carmen de Apical??",
    "Casabianca",
    "Chaparral",
    "Coello",
    "Coyaima",
    "Cunday",
    "Dolores",
    "Espinal",
    "Fal??n",
    "Flandes",
    "Fresno",
    "Guamo",
    "Guayabal",
    "Herveo",
    "Honda",
    "Ibagu??",
    "Icononzo",
    "L??rida",
    "L??bano",
    "Mariquita",
    "Melgar",
    "Murillo",
    "Natagaima",
    "Ortega",
    "Palocabildo",
    "Piedras",
    "Planadas",
    "Prado",
    "Purificaci??n",
    "Rioblanco",
    "Roncesvalles",
    "Rovira",
    "Salda??a",
    "San Antonio",
    "San Luis",
    "Santa Isabel",
    "Su??rez",
    "Valle de San Juan",
    "Venadillo",
    "Villahermosa",
    "Villarrica"
  ],
  "Vaup??s": [
    "Cacar??",
    "Mit??",
    "Papunaua",
    "Pacoa",
    "Taraira",
    "Yavarat??"
  ],
  "Vichada": [
    "Cumarib??",
    "La Primavera",
    "Puerto Carre??o",
    "Santa Rosalia"
  ]
}];


var departamentos =$('#departamento');
var ciudades =$('#ciudad');


departamentos.empty();
departamentos.append('<option disabled selected hidden>Antioquia</option>');

let option;

var col=colombia[0];

var dptos=Object.keys(col);

for (let i = 0; i < dptos.length; i++) {

          option = document.createElement('option');     
      	  option.text = dptos[i]; 
      	  departamentos.append('<option class="option">'+option.text+'</option>');    	  
}

var selecteddpto = document.querySelector('.departamento');

selecteddpto.addEventListener('change', (event) => { 

	ciudades.empty();
	ciudades.append('<option disabled selected hidden>Medell??n</option>');
	var dpto=$('#departamento').val();

	for (let j = 0; j < col[dpto].length; j++) {

					option = document.createElement('option');
      	  option.text = col[dpto][j]; 
      	  ciudades.append('<option class="option">'+option.text+'</option>'); 
	}
   
});