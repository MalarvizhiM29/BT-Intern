const repl = require("node:repl");

const msg = "message";

repl.start(">").context.messages = msg;
