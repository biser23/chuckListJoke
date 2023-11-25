
document.addEventListener('DOMContentLoaded', () => {
const getJokeButton = document.getElementById('fetchJoke');
const jokeArea = document.getElementById('jokeList');
getJokeButton.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((Response) => {
      if (!Response.ok) {
        throw new Error('Página no disponible');
      }
      return Response.json();
    })
    .then((data) => {
      jokeArea.innerHTML += `<li>${data.value}</li>`;
     
    })
    .catch((Error) => {
      jokeArea.innerHTML = '<li>No se puede obtener una nueva broma </li>';
    });
    
});

getJokeButton.innerHTML += `<div> 
        <button id="eliminar"> Eliminar </button> </div>`;

const removeButton = document.getElementById("eliminar")
removeButton.addEventListener("click", () =>{
    if (!jokeArea) {
        jokeArea = 0;
    }
    jokeArea.innerHTML = ``;
});
});

