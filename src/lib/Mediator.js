// Simpler Mediator auf Basis des EventEmitter-Mixins. Dieses Modul macht nichts
// weiter als Events zu verteilen und dient als zentraler Datenaustauschpunkt
// der App.
define(['mixins/EventEmitter'], function(EventEmitter){

  'use strict';

  // Der Mediator-Constructor hat keine eigene Funktionalität...
  var Mediator = function(){};

  // ... außer der eines EventEmitters.
  EventEmitter.call(Mediator.prototype);

  // Das war's!
  return Mediator;

});