import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from "./../src/galactic-calculator.js";

$(document).ready(function() {
  $("#galacticForm").submit(function(event) {
    event.preventDefault();

    let ageInput = parseInt($("#ageInput").val());
    let ageOnMercury = Age.prototype.mercuryAge(ageInput); 
    let ageOnVenus = Age.prototype.venusAge(ageInput); 
    let ageOnMars = Age.prototype.marsAge(ageInput); 
    let ageOnJupiter = Age.prototype.jupiterAge(ageInput); 

    $("span#mercuryAge").text(ageOnMercury);
    $("span#venusAge").text(ageOnVenus);
    $("span#marsAge").text(ageOnMars);
    $("span#jupiterAge").text(ageOnJupiter);
   
  
    

  });
});