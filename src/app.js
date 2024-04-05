/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#My-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};
let generateExcuse = () => {
  let who = ["Mi gato ", "Un niño ", "El vecino ", "Mi abuelita "];
  let action = ["rompió ", "aplastó ", "pisó ", "botó "];
  let what = ["mi portátil ", "mi tarea ", "mis documentos ", "mi auto "];
  let when = [
    "mientras dormía",
    "en la mañana",
    "mientras me ejercitaba",
    "cuando salía de casa"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex]
  );
};
