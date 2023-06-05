/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  //write your code here
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
  let the_who = 0;
  let the_action = 0;
  let the_what = 0;
  let the_when = 0;

  function onLoad(x) {
    let select_who = Math.floor(Math.random() * 4);
    the_who = who[select_who];

    let select_action = Math.floor(Math.random() * 4);
    the_action = action[select_action];

    let select_what = Math.floor(Math.random() * 3);
    the_what = what[select_what];

    let select_when = Math.floor(Math.random() * 5);
    the_when = when[select_when];

    return the_who + " " + the_action + " " + the_what + " " + the_when;
  }

  let resultado = onLoad();

  let my_excuse = document.getElementById("excuse");

  my_excuse.textContent = resultado;
};
