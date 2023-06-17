/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  //write your code here

  function generador(quien, verbo, que, cuando) {
    let excusa = "";

    excusa = quien[Math.floor(Math.random() * quien.length)];
    excusa += " " + verbo[Math.floor(Math.random() * verbo.length)];
    excusa += " " + que[Math.floor(Math.random() * que.length)];
    excusa += " " + cuando[Math.floor(Math.random() * cuando.length)];

    return excusa;
  }

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let resultado = generador(who, action, what, when);

  let my_excuse = document.getElementById("excuse");

  my_excuse.textContent = resultado;
};
