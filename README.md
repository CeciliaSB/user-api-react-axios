# Consumiendo una API con React y Axios

Primera vez usando la libreria Axios. Creé una aplicación con React, en la que decidí utilizar Redux store para almacenar la data de los usuarios. Además, los componentes de React interactuan con el Store enviando una acción u obtiendo data con React-Redux Hooks API. Los reducers toman cada acción y retornan un nuevo state.

## Librerias y dependencias utilizadas

- Axios
- Redux
- react-redux
- Redux-devtools
- redux-thunk
- React Router Dom 

### `Descripción`

– package.json contiene principalmente los siguientes módulos: react, react-router-dom, react-redux, redux,   redux-thunk y axios.
– App es el contenedor que en su interior tiene a Router.
– Tenemos 2 paginas o vistas: UsersList y SingleUser.
– http-common.js inicializa axios con la Url base y headers.
– userService contiene metodos para enviar llamadas HTTP a la API.
– .env configura el puerto para esta aplicación de React.

Elementos de Redux que utilicé:
– Un folder Actions que contiene al creador de las acciones (myUsers.js y type.js).
– Un folder Reducers que contiene el reducer (users.js e index.js) que actualiza el state de la aplicación, correspondiante a la acción enviada.


