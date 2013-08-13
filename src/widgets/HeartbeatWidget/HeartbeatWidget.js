// Beispiel-Modul mit jQuery als Dependency
define(['jquery'], function($){

  'use strict';

  // Jedes Modul gibt eine Constructorfunktion zurück. Das Ist eine der
  // KERNKONVENTIONEN der App. Die Funktion erwartet IMMER ein DOM-Element, das
  // das Widget als Zielcontainer für das eigene Sub-DOM nutzen kann
  return function TestWidget(target){

    // Das Widget lauscht auf heartbeat-Events und schreibt die empfangenen
    // Daten in seinen Container
    window.APP.mediator.on('heartbeat', function(data){
      $(target).html('<p>' + data.toString() + '</p>');
    });

  };

});