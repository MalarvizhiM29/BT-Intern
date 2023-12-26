const EventEmitter = require("node:events");
const emitter = new EventEmitter();
console.log(emitter.getMaxListeners());
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
console.log(emitter.getMaxListeners());
emitter.once("add-to-cart", () => {
  console.log(emitter.getMaxListeners());
});

emitter.emit("add-to-cart");
