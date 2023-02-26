#!/usr/bin/env node

// npm install node-fetch@2.6
const fetch = require("node-fetch");

(async () => {
  const req = await fetch("http://localhost:3002/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": `nodejs/${process.version}`,
      Accept: "application/json",
    },
    body: JSON.stringify({
      foo: "bar",
    }),
  });

  const payload = await req.json();
  console.log("🚀 ~ file: node.js:20 ~ payload:", payload);
  console.log();
})();
