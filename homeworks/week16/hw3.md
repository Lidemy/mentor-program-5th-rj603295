### 答案為：
<pre>
undefined
5
6
20
1
10
100
</pre>
以下為執行說明：
1. 首先執行 function fn，由於 fn 函式內 a 的宣告 ```var a``` 會 hoisting 到 fn 函式的最上層，因此第一個 fn 函式內的 `console.log(a)` 會印出 `undefined`。
2. 賦值 fn 函式內的 a = 5。
3. 接著第二個 fn 函式內 `console.log(a)`，由於 a 已經賦值，因此印出 5。
4. a++，所以 fn 函式內的 a = 6。
5. 執行 var = a，但由於 a 已經被宣告，因此此行無效。
6. 接著執行 fn2，由於 fn2 函式的作用域中沒有 a，因此向上往 fn 函式的作用域尋找 a，此時 a = 6，所以 `console.log(a)` 印出 6。 
7. 由於 fn2 函式的作用域中沒有 a，因此向上往 fn 函式的作用域尋找 a，賦值 fn 函式內的 a = 20。
8. 由於 fn2 函式的作用域中沒有 b，fn 函式的作用域中沒有 b，在全域宣告一個 b 變數並賦值 100，fn2 函式執行完畢。
9. 接著第三個 fn 函式內 `console.log(a)`，此時 a = 20，因此印出 20，fn 函式執行完畢。
10. 執行全域的第一個 `console.log(a)`，此時全域的 a = 1，因此印出 1。
11. 賦值全域的 a = 10。
12. 執行全域的第二個 `console.log(a)`，此時全域的 a = 10，因此印出 10。
13. 執行全域的 `console.log(b)`，此時全域的 b = 100，因此印出 100。