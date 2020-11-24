# ✏️ Redis, Node 연결

부스트캠프 5주 프로젝트 과정을 위한 Redis 삽질 문서입니다.  
Redis와 Node를 연결하는 방법을 테스트하고, 어떤 자료구조까지 사용 가능한지 연구합니다.

```json
  "dependencies": {
    "dotenv": "^8.2.0",
    "redis": "^3.0.2"
  }
```

## 삽질 토픽

### Redis와 Node를 어떻게 연결할까?

- 결론

```javascript
const redis = require("redis");
require("dotenv").config();

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
});
```

### Redis에 JSON을 저장할 수 있을까?

- 결론

```javascript
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
```

이런식으로 하면 JSON형식의 데이터를 저장할 수 있다.  
가장 효과적인 방법인지는 모르겠다.
