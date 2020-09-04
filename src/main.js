import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from "./../src/galactic-calculator.js";

$(document).ready(function() {
  $("#galacticForm").click(function(event) {
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


    $("#lifeExpectancy").click(function(event) {
      event.preventDefault();
      let genderFactor = parseInt($("input:radio[name=gender]:checked").val());
      
      let otherFactorsTotal = 0;
    
      $(":checkbox").change(function() {
        $(":checkbox:checked").each(function() {
          otherFactorsTotal += parseInt($(this).val());
        });
        
        return otherFactorsTotal;
      });

      let lifeFactors = genderFactor + otherFactorsTotal;

      let total = spaceAge.affectOnExpectancy(lifeFactors);
      console.log(otherFactorsTotal);
      console.log(total);
   
    });
  });
});