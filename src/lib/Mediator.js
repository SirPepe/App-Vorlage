// Simpler Mediator auf Basis des EventEmitter-Mixins
define(['mixins/EventEmitter'], function(EventEmitter){

  'use strict';

  // Der Mediator-Constructor hat keine eigene Funktionalität...
  var Mediator = function(){};

  // ... außer der eines EventEmitters
  EventEmitter.call(Mediator.prototype);

  return Mediator;

});