# Thread Loader Issue

to reproduce:

```js
yarn install
yarn start
```
then quit the dev server once it is running

`ps aux | grep run-server` will show the forked process hanging

if you install thread-loader@2.0.0, the issue does not happen