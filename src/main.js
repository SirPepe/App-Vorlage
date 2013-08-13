// Main-Datei. Lädt alle Widgets. Könnte man bestimmt schöner regeln!

require([
  'requirejs',
  'jquery',
  'lib/Mediator',
  'widgets/HeartbeatWidget/HeartbeatWidget',
  'widgets/ButtonWidget/ButtonWidget'
], function(_require, $, Mediator, HeartbeatWidget, ButtonWidget){

  'use strict';

  // Globalen App-Namespace initialisieren. Alle globalen Variablen werden, wenn
  // sie denn nötig sind, hier platziert.
  window.APP = window.APP || {};

  // Mediator initialisieren. Dass der Mediator hier erreichbar ist, ist eine
  // der KERNKONVENTIONEN der App.
  window.APP.mediator = new Mediator();

  // Container-Element für alle Widgets
  $main = $('main');

  // Jedes Widget ist ein Mini-Programm und muss einzeln initialisiert werden
  [HeartbeatWidget, ButtonWidget].forEach(function(Widget){

    // Jedes Widget bekommt einen eigenen Container
    var $widgetContainer = $('<section>')
      .addClass('widgetContainer')
      .addClass(Widget.name);

    // Das Widget bekommt in seiner Constructorfunktion übergeben, in welchen
    // Container es sich rendern darf. Dass jedes Widget eine Constructorfunktion
    // bereitstellt, ist eine der KERNKONVENTIONEN der App.
    new Widget($widgetContainer[0]);

    // Der Widget-Container wird in das DOM eingehängt. Was das Widget mit dem
    // Container macht, bleibt ihm überlassen.
    $widgetContainer.appendTo($main);

  });


  // Erstes Beispiel für Kommunikation zwischen verschiedenen Programmteilen:
  // ein Heartbeat-Event an den Mediator senden. Widgets könnten dieses Event
  // abfangen und verwenden...
  window.setInterval(function(){
    window.APP.mediator.trigger('heartbeat', new Date());
  }, 1000);

  // Zweites Beispiel für Kommunikation zwischen verschiedenen Programmteilen:
  // wenn ein "Hallo"-Event passiert, reagiert die Main-Datei darauf
  window.APP.mediator.on('hallo', function(){
    window.alert('Welt');
  });

});