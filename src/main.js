import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from "./../src/galactic-calculator.js"

$(document).ready(function() {
  $("#galacticForm").submit(function(event) {
    event.preventDefault();

  });
});