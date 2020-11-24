const redis = require("redis");
require("dotenv").config();

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
});

client.set("name", "moaikang");
client.get("name", (err, reply) => {
  console.log(reply); // moaikang
});

const JSONdata = {
  key1: "val1",
  key2: [1, 2, 3],
  key3: {
    hihi: "hihi",
    byebye: "byebye",
  },
};

client.set("asdf", JSON.stringify(JSONdata));
client.get("asdf", (err, reply) => {
  console.log(JSON.parse(reply));
});
