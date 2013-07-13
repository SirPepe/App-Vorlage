// Main-Datei. Lädt alle Widgets.
require([
  'requirejs',
  'jquery',
  'lib/Mediator',
  'widgets/TestWidget/TestWidget'
], function(_require, $, Mediator, TestWidget){

  'use strict';

  // Globalen App-Namespace initialisieren
  window.APP = window.APP || {};

  // Mediator initialisieren
  window.APP.mediator = new Mediator();

  // Container für alle Widgets
  $main = $('main');

  // Jedes Widget bekommt einen Container
  var $widgetContainer = $('<section>')
    .addClass('widgetContainer')
    .addClass(TestWidget.name);

  // Das Widget bekommt in seiner Constructorfunktion übergeben, in welchen
  // Container es sich rendern darf
  new TestWidget($widgetContainer[0]);

  // Der Widget-Container wird in das DOM eingehängt
  $widgetContainer.appendTo($main);

  // Beispiel-Heartbeat-Event an den Mediator senden
  window.setInterval(function(){
    window.APP.mediator.trigger('heartbeat', new Date());
  }, 1000);


});