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

    $("span#mercuryAge").text(ageOnMercury);
    $("span#venusAge").text(ageOnVenus);
    $("span#marsAge").text(ageOnMars);
    $("span#jupiterAge").text(ageOnJupiter);

    $("#planets").show();



   
  
    

  });
});