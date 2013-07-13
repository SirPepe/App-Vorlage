// Beispiel-Modul mit jQuery als Dependency
define(['jquery'], function($){

  'use strict';

  // Jedes Modul gibt eine Constructorfunktion zurück, erwartet auf dieser
  // Funktion ein DOM-Element als Zielcontainer für das eigene Sub-DOM
  return function TestWidget(target){

    // Das Widget wartet auf `heartbeat`-Events und schreibt die empfangenen
    // Daten in seinen Container
    window.APP.mediator.on('heartbeat', function(data){
      $(target).html('<p>' + data.toString() + '</p>');
    });

  };

});