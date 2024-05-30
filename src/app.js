/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["My dog", "My Grandma", "My sister", "My mom"];
  let action = ["broke", "bite", "cut", "hit"];
  let what = ["my homework", "my phone", "my hair", "the car"];
  let when = [
    "while i was sleeping",
    "while i was playing",
    "during my lunch",
    "while i was exercising"
  ];

  const excuseGenerator = () => {
    let fraseAleatoria = Math.random();
    let indexWho = Math.floor(fraseAleatoria * who.length);
    let indexAction = Math.floor(fraseAleatoria * action.length);
    let indexWhat = Math.floor(fraseAleatoria * what.length);
    let indexWhen = Math.floor(fraseAleatoria * when.length);

    let wordWho = who[indexWho];
    let wordAction = action[indexAction];
    let wordWhat = what[indexWhat];
    let wordWhen = when[indexWhen];

    let fraseFinal =
      wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;
    return fraseFinal;
  };

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
