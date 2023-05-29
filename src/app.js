import "bootstrap";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = randomnumber();
};

let randomnumber = () => {
  let Pronombre = ["Su", "El"];
  let quien = ["cobaya", "vecino", "gato", "mamá"];
  let Accion = ["se comió", "rompió", "rasgó"];
  let posesion = ["mi tarea", "mi pantalon", "mis zapatos", "mi celular"];
  let cuando = ["anoche", "Hoy", "en la manaña", "ayer"];

  let pronIndex = Math.floor(Math.random() * Pronombre.length);
  let quienIndex = Math.floor(Math.random() * quien.length);
  let AccionIndex = Math.floor(Math.random() * Accion.length);
  let posesionIndex = Math.floor(Math.random() * posesion.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    Pronombre[pronIndex] +
    " " +
    quien[quienIndex] +
    " " +
    Accion[AccionIndex] +
    " " +
    posesion[posesionIndex] +
    " " +
    cuando[cuandoIndex]
  );
};
