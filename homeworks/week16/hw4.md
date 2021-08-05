### 答案為：
<pre>
2
2
undefined
</pre>
以下為執行說明：
1. `obj.inner.hello()`，此時 this 的指向為 inner，所以印出 inner 內的 value，為 2。
2. `obj2.hello()`，此時 this 的指向為 obj2，obj2 = obj.inner，所以印出 inner 內的 value，為 2。
3. `hello()`，此時 this 的指向為 window，所以印出 window 的 value，為 undefined，如果使用嚴格模式，則會報錯。
