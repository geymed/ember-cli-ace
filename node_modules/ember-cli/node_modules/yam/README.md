yam
====

[![Build Status](https://travis-ci.org/twokul/yam.svg)](https://travis-ci.org/twokul/yam)

Dead simple lazy storage interface.

Yam is lazy by default. "Lazy" means that it never tries to persist settings unless you ask it to.

#### Yam Constructor

```javascript
var yam = new Yam('test');
```

Code above creates an instance of `Yam`. You can call `get` and `set` on it and it will keep settings
in the memory until you call `flush`.

```javascript
yam.flush();
```

Upon `flush` call, it will persist all the settings to the file (`.test`). Name of the file: '.' + a provided name.

#### Get

```javascript
yam.get('foo'); // => 'bar'
```

#### Set

```javascript
yam.set('foo', 'baz');
yam.get('foo'); // => 'baz'
```

#### Remove

```javascript
yam.remove('foo');
yam.get('foo'); // => null
```

#### Clear

```javascript
yam.clear();
```
