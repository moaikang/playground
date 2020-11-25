# ✏️ Redis, Node 연결

부스트캠프 5주 프로젝트 과정을 위한 Redis 삽질 문서입니다.  
Redis와 Node를 연결하는 방법을 테스트하고, 어떤 자료구조까지 사용 가능한지 연구합니다.

```json
 "dependencies": {
    "dotenv": "^8.2.0",
    "redis": "^3.0.2"
  },
  "devDependencies": {
    "@types/redis": "^2.8.28",
    "typescript": "^4.1.2"
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

### Redis와 TypeScript를 어떻게 같이 사용하지?

- 결론

```plain text
@types/redis 를 설치한 뒤에, 사용하면 된다.
딱히 특별한 방법을 요하지 않는다.
```

### Redis 함수를 Promise로 사용할 수 있을까?

```typescript
client.get("name", (err, reply) => {
  if (!reply) {
    console.log("Data is not exist!");
    return;
  }

  console.log(reply); // moaikang
});
```

이 친구를

```typescript
import { promisify } from "util";

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
```

이런 방법으로 `promisify`를 사용해서 바꿀 수 있다.

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
