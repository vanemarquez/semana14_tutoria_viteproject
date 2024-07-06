
# Proyecto de Gestión de Usuarios con Axios y JSON Server
Este proyecto implementa una aplicación simple para gestionar usuarios utilizando Axios para las operaciones HTTP y JSON Server como backend de base de datos simulada.

## Funcionalidades

### Visualización de Usuarios: ###
Para visualizar los usuarios almacenados en la base de datos simulada, utilizamos la función `readUsers()` que realiza lo siguiente:

- **Fetch de Datos:** Hace una solicitud GET a `http://localhost:3000/users` utilizando fetch para obtener la lista de usuarios en formato JSON.

- **Creación de Elementos HTML:** Utiliza `document.createElement()` para crear elementos de tabla `(<tr>, <th>, <td>, <button>)` y asignarles el contenido correspondiente (número de fila, nombre, apellido, país) para cada usuario.

- **Actualización del DOM:** Agrega dinámicamente los elementos creados al `<tbody>`de la tabla en la página HTML.

### Agregar Usuario ### 
Para agregar un nuevo usuario a la lista, implementamos la función `addUser(object)`:

- **Envío de Datos:** Utiliza Axios `(axios.post)` para realizar una solicitud POST a `http://localhost:3000/users`, enviando un objeto que contiene los datos del nuevo usuario (nombre, apellido, país).

- **Actualización Automática:** Después de agregar el usuario, la página se recarga automáticamente `(location.reload())` para que aparezca el nuevo estado de la lista de usuarios.

### Eliminar Usuario ###
 Para eliminar un usuario existente de la lista, se emplea la función `deleteUser(idUser)`:

- **Solicitud de Eliminación:** Utiliza Axios `(axios.delete)` para enviar una solicitud DELETE a `http://localhost:3000/users/{idUser}`, donde `{idUser}` es el ID del usuario a eliminar.

- **Recarga de la Página:** Después de eliminar el usuario, la página se recarga automáticamente `(location.reload())` para refrescar la tabla y mostrar los cambios actualizados.

### Formulario y Event Listeners ###
- **Formulario de Agregar Usuario:** Utiliza un formulario HTML con campos para nombre, apellido y país. Un event listener está asociado al evento submit del formulario para capturar los datos ingresados por el usuario, crear un nuevo objeto de usuario y llamar a `addUser()` para agregarlo al servidor.

- **Event Listener de Carga de Contenido:** Utiliza `DOMContentLoaded` para asegurarse de que la lista de usuarios se carga correctamente cuando la página HTML y los estilos CSS están completamente cargados.
