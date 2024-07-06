import axios from 'axios' ;
import './style.css'

let row=0;

listenerLoad();

//CARGAR LA DATA AL INICIAR LA PÁGINA

function listenerLoad (){
  document.addEventListener('DOMContentLoaded',readUsers);
}

//LEER / OBTENER LA DATA (JSON)
async function readUsers(){

  //console.log('readUser si carga1');
  const data = await fetch('http://localhost:3000/users'); 
  const json = await data.json();
  const tbody = document.querySelector('#table-users tbody')
  //console.log('json', json);

  json.forEach((element,index) => {

  const fila = document.createElement('tr');

  const celdaNro = document.createElement ('th');
  celdaNro.textContent = index + 1;
  celdaNro.style = "width:50px";
  fila.appendChild(celdaNro);

  const celdaNombre = document.createElement ('td');
  celdaNombre.textContent = element.name;
  celdaNombre.style = "width:150px";
  fila.appendChild(celdaNombre);

  const celdaApellido = document.createElement ('td');
  celdaApellido.textContent = element.lastname;
  celdaApellido.style = "width:150px";
  fila.appendChild(celdaApellido);

  const celdaPais = document.createElement ('td');
  celdaPais.textContent = element.country;
  celdaPais.style = "width:150px";
  fila.appendChild(celdaPais);

  // const celdaId = document.createElement ('td');
  // celdaId.textContent = element.id;
  // fila.appendChild(celdaId);

  const celdaBtn = document.createElement('td');
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent="Eliminar"
  btnEliminar.id = `delete-${element.id}`;
  btnEliminar.addEventListener('click',() => deleteUser(element.id));
  celdaBtn.appendChild(btnEliminar);
  fila.appendChild(celdaBtn);
  //console.log('index', index);
  
  row = index + 1;

  console.log(row);
//Agregar al tbody

tbody.appendChild(fila)

 });
}

async function addUser(object){
  const data = await axios.post('http://localhost:3000/users', object);
}

async function deleteUser(idUser){
  console.log('idUser', idUser);
  const data = await axios.delete(`http://localhost:3000/users/${idUser}`);
  location.reload();
}

document.getElementById('form-users').addEventListener('submit', function(event){ 
  event.preventDefault();

  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const country = document.getElementById('country').value;

const user = {
  id: row + 1,
  name : name,
  lastname: lastname,
  country: country
}

addUser(user)

location.reload();

})


