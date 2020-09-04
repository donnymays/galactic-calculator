import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from "./../src/galactic-calculator.js";

$(document).ready(function() {
  $("#galacticForm").submit(function(event) {
    event.preventDefault();
    
    let ageInput = parseInt($("#ageInput").val());
    
    let spaceAge = new Age(ageInput);

    let ageOnMercury = spaceAge.mercuryAge(ageInput); 
    let ageOnVenus = spaceAge.venusAge(ageInput); 
    let ageOnMars = spaceAge.marsAge(ageInput); 
    let ageOnJupiter = spaceAge.jupiterAge(ageInput); 
  
    

    $("span#mercuryAge").text(`You are ${ageOnMercury} years old`);
    $("span#venusAge").text(`You are ${ageOnVenus} years old`);
    $("span#marsAge").text(`You are ${ageOnMars} years old`);
    $("span#jupiterAge").text(`You are ${ageOnJupiter} years old`);

    $("#planets").show();
  });
});