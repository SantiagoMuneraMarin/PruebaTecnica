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
    "Miritiparaná",
    "Puerto Alegría",
    "Puerto Arica",
    "Puerto Nariño",
    "Puerto Santader"
  ],
  "Atlántico": [
    "Baranoa",
    "Baranoa",
    "Barranquilla",
    "Campo de la Cruz",
    "Candelaría",
    "Galapa",
    "San Juan de Acosta",
    "Luruaco",
    "Malambo",
    "Manatí",
    "Palmar de Varela",
    "Piojo",
    "Polo Nuevo",
    "Ponedera",
    "Puerto Colombia",
    "Repelón",
    "Sabanagrande",
    "Sabanalarga",
    "Santa Lucía",
    "Santo Tomás",
    "Soledad",
    "Suan",
    "Tubara",
    "Usiacurí"
  ],
  "Caquetá": [
    "Albania",
    "Belén de los Andaquíes",
    "Cartagena del Chaira",
    "Curillo",
    "El Doncello",
    "El Paujil",
    "Florencia",
    "La Montañita",
    "Milan",
    "Morelia",
    "Puerto Rico",
    "San José de Fragua",
    "San Vicente del Caguán",
    "Solano",
    "Solita",
    "Valparaíso"
  ],
  "Cesar": [
    "Aguachica",
    "Agustín Codazzi",
    "Astrea",
    "Becerril",
    "Bosconia",
    "Chimichagua",
    "Chiriguaná",
    "Curumaní",
    "El Copey",
    "El Paso",
    "Gamarra",
    "González",
    "La Gloria",
    "La Jagua",
    "Ibirico",
    "Manaure",
    "Pailitas",
    "Pelaya",
    "Pueblo Bello",
    "Río de Oro",
    "Robles la Paz",
    "San Alberto",
    "San Diego",
    "San Martín",
    "Tamalameque",
    "Valledupar"
  ],
  "Chocó": [
    "Acandi",
    "Alto Baudo",
    "Atrato",
    "Bagado",
    "Bahía Solano",
    "Belén de bajirá",
    "Bajo Baudo",
    "Bojayá",
    "Cantón de San Pablo",
    "Carmen del Darién",
    "Certeguí",
    "Condoto",
    "El Carmen",
    "Istmina",
    "Jurado",
    "Litoral del San Juan",
    "Lloró",
    "Medio Atrato",
    "Medio Baudo",
    "Medio San Juan",
    "Novita",
    "Nuquí",
    "Quibdó",
    "Río Iro",
    "Río Quito",
    "Riosucio",
    "San José del Palmar",
    "Sipí",
    "Tado",
    "Unguía",
    "Unión Panamericana"
  ],
  "Córdoba": [
    "Ayapel",
    "Buenavista",
    "Canalete",
    "Cerete",
    "Chima",
    "Chinu",
    "Ciénaga de Oro",
    "Cotorra",
    "La Apartada",
    "Lorica",
    "Los Córdobas",
    "Momil",
    "Moñitos",
    "Montelibano",
    "Montería",
    "Planeta Rica",
    "Pueblo Nuevo",
    "Puerto Escondido",
    "Puerto Libertador",
    "Purísima",
    "Sahagun",
    "San Andrés",
    "Sotavento",
    "San Antero",
    "San Bernardo Viento",
    "San Carlos",
    "San Pelayo",
    "Tierralta",
    "Tuchin",
    "Valencia"
  ],
  "Guainía": [
    "Inírida",
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
    "San José del Guaviare"
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
    "Garzón",
    "Gigante",
    "Guadalupe",
    "Hobo",
    "Íquira",
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
    "San Agustín",
    "Santa María",
    "Suaza",
    "Tarqui",
    "Tello",
    "Teruel",
    "Tesalia",
    "Timana",
    "Villavieja",
    "Yaguará"
  ],
  "La Guajira": [
    "Riohacha",
    "Albania",
    "Barranca",
    "Dibulla",
    "Distracción",
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
    "Colón",
    "Mocoa",
    "Orito",
    "Puerto Asís",
    "Puerto Caicedo",
    "Puerto Guzman",
    "Leguizamo",
    "San Francisco",
    "San Miguel",
    "Santiago",
    "Sibundoy",
    "Valle del Guamuez",
    "Villagarzón"
  ],
  "Quindío": [
    "Armenia",
    "Buenavista",
    "Calarca",
    "Circasia",
    "Córdoba",
    "Filandia",
    "Genova",
    "La Tebaida",
    "Montenegro",
    "Pijao",
    "Quimbaya",
    "Salento"
  ],
  "San Andrés y Providencia": [
    "Providencia",
    "San Andrés y Providencia"
  ],
  "Sucre": [
    "Buenavista",
    "Caimito",
    "Chalán",
    "Colosó",
    "Coveñas",
    "Corozal",
    "El Roble",
    "Galeras",
    "Guaranda",
    "La Unión",
    "Los Palmitos",
    "Majagual",
    "Morroa",
    "Ovejas",
    "Palmito",
    "Sampués",
    "San Benito Abad",
    "San Juan de Betulia",
    "San Marcos",
    "San Onofre",
    "San Pedro",
    "Sincé",
    "Sincelejo",
    "Sucre",
    "Tolú",
    "Toluviejo"
  ],
  "Tolima": [
    "Alpujarra",
    "Alvarado",
    "Ambalema",
    "Anzoátegui",
    "Ataco",
    "Cajamarca",
    "Carmen de Apicalá",
    "Casabianca",
    "Chaparral",
    "Coello",
    "Coyaima",
    "Cunday",
    "Dolores",
    "Espinal",
    "Falán",
    "Flandes",
    "Fresno",
    "Guamo",
    "Guayabal",
    "Herveo",
    "Honda",
    "Ibagué",
    "Icononzo",
    "Lérida",
    "Líbano",
    "Mariquita",
    "Melgar",
    "Murillo",
    "Natagaima",
    "Ortega",
    "Palocabildo",
    "Piedras",
    "Planadas",
    "Prado",
    "Purificación",
    "Rioblanco",
    "Roncesvalles",
    "Rovira",
    "Saldaña",
    "San Antonio",
    "San Luis",
    "Santa Isabel",
    "Suárez",
    "Valle de San Juan",
    "Venadillo",
    "Villahermosa",
    "Villarrica"
  ],
  "Vaupés": [
    "Cacarú",
    "Mitú",
    "Papunaua",
    "Pacoa",
    "Taraira",
    "Yavaraté"
  ],
  "Vichada": [
    "Cumaribó",
    "La Primavera",
    "Puerto Carreño",
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
	ciudades.append('<option disabled selected hidden>Medellín</option>');
	var dpto=$('#departamento').val();

	for (let j = 0; j < col[dpto].length; j++) {

					option = document.createElement('option');
      	  option.text = col[dpto][j]; 
      	  ciudades.append('<option class="option">'+option.text+'</option>'); 
	}
   
});