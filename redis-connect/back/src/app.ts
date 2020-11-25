// const redis = require("redis");
import redis from "redis";
import dotenv from "dotenv";
import { promisify } from "util";

dotenv.config();

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const client = redis.createClient({
  host: REDIS_HOST,
  port: parseInt(REDIS_PORT as string),
  password: REDIS_PASSWORD,
});

client.set("name", "moaikang");

client.get("name", (err, reply) => {
  if (!reply) {
    console.log("Data is not exist!");
    return;
  }

  console.log(reply); // moaikang
});

const getAsync = promisify(client.get).bind(client);

const getName = async () => {
  try {
    const reply = await getAsync("name");
    console.log("Use Async!", reply);
  } catch (e) {
    console.error(e);
  }
};

getName();

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
  if (!reply) {
    console.log("Data is not exist!");
    return;
  }

  console.log(JSON.parse(reply as string));
});
