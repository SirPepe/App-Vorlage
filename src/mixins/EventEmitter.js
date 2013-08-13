// Ganz simpler Event Emitter als Mixin. Stellt folgende Funktionen bereit:
//  * `on(topic, cb)` setzt einen Callback "cb" als Listener auf das Event "topic" an
//  * `off(topic, cb)` entfernt einen Callback als Listener
//  * `trigger(topic, data...)` löst das Event "topic" aus und übergibt ggf. weitere Daten
// Benutzung: EventEmitter.call(MeinObjConstructor.prototype);
define(function(){

  return function EventEmitter(){

    // Enthält Arrays von Callbacks, die auf Events warten
    var topics = {};

    // Meldet "callback" als Event Handler für "topic" an
    this.on = function(topic, callback){
      if(typeof topics[topic] === 'undefined') topics[topic] = [];
      topics[topic].push(callback);
    };

    // Entfernt "callback" für das Event "topic"
    this.off = function(topic, callback){
      topics[topic].splice(topics[topic].indexOf(callback), 1);
    };

    // Löst alle Callbacks für das Event "topic" aus und übergibt alle weiteren
    // an "trigger" übergebenen Parameter als Daten-Arguments an die Callbacks
    this.trigger = function(topic){
      if(typeof topics[topic] === 'undefined') return;
      var args = Array.prototype.slice.call(arguments, 1);
      for(var i = 0; i < topics[topic].length; i++){
        var callback = topics[topic][i];
        callback.apply(null, args);
      }
    };

  };

});