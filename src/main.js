// Main-Datei. Lädt alle Widgets. Könnte man bestimmt schöner regeln!

require([
  'requirejs',
  'jquery',
  'lib/Mediator',
  'widgets/TestWidget/TestWidget'
], function(_require, $, Mediator, TestWidget){

  'use strict';

  // Globalen App-Namespace initialisieren. Alle globalen Variablen werden, wenn
  // sie denn nötig sind, hier platziert.
  window.APP = window.APP || {};

  // Mediator initialisieren. Dass der Mediator hier erreichbar ist, ist eine
  // der KERNKONVENTIONEN der App.
  window.APP.mediator = new Mediator();

  // Container-Element für alle Widgets
  $main = $('main');

  // Jedes Widget bekommt einen eigenen Container
  var $widgetContainer = $('<section>')
    .addClass('widgetContainer')
    .addClass(TestWidget.name);

  // Das Widget bekommt in seiner Constructorfunktion übergeben, in welchen
  // Container es sich rendern darf. Dass jedes Widget eine Constructorfunktion
  // bereitstellt, ist eine der KERNKONVENTIONEN der App.
  new TestWidget($widgetContainer[0]);

  // Der Widget-Container wird in das DOM eingehängt. Was das Widget mit dem
  // Container macht, bleibt ihm überlassen.
  $widgetContainer.appendTo($main);

  // Beispiel für Kommunikation zwischen verschiedenen Programmteilen: Ein
  // Heartbeat-Event an den Mediator senden. Widgets könnten dieses Event
  // abfangen und verwenden...
  window.setInterval(function(){
    window.APP.mediator.trigger('heartbeat', new Date());
  }, 1000);


});