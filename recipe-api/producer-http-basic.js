#!/usr/bin/env node
// npm install fastify@3.2

const server = require("fastify")();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 4000;

console.log(`worker pid=${process.pid}`);

server.get("/recipes/:id", async (req, reply) => {
  console.log();
  console.log(`worker requests pid=${process.pid}`);
  const id = Number(req.params.id);
  if (id !== 42) {
    reply.statusCode = 404;
    return {err: "not_found"};
  }
  return {
    producer_pid: process.pid,
    recipe: {
      id,
      name: "Padthai",
      steps: "Throw it in a wok with galic, oil, soy sauce ...",
      ingredients: [
        {id: 1, name: "garlic", quantity: "1-2"},
        {id: 2, name: "rice noodle", quantity: "300g"},
        {id: 3, name: "pad thai sauce", quantity: "5-6 tbs"},
      ],
    },
  };
});

server.listen(PORT, HOST, () => {
  console.log(`Producer running at http://${HOST}:${PORT}`);
});
