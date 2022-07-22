---
Category: ["Object"]
---
## [[Lodash|_]].get(object, path, \[defaultValue\])
### 作用
(Comment:: "获取指定对象中指定属性路径下的属性值")

### 参数说明
|参数名|参数类型|必填?|参数说明|默认值|
|:-|:-|:-|:-|:-|
|object|Object|true|需要获取属性值的对象||
|path|String|true|需要获取值的属性路径||
|defaultValue|any|false|未能获取到属性值时,返回的默认值|undefined|

### 返回值
any \| undefined 类型返回值
- 当指定的属性路径存在时, 返回该属性值
- 当指定的属性不存在时, 如果有指定默认返回值, 则返回默认值, 如果未指定默认返回值, 则返回 undefined

### 示例
```javascript
const _ = require('lodash');
var object = { 'a': [{ 'b': { 'c': 3 } }] };
_.get(object, 'a[0].b.c'); // => 3
_.get(object, ['a', '0', 'b', 'c']); // => 3
_.get(object, 'a.b.c', 'default'); // => 'default'
```

#Lodash 