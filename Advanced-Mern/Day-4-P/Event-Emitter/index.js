const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("MessageLogged", function () {
  console.log("Emitter Logged");
});

emitter.emit("MessageLogged");
