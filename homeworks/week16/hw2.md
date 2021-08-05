### 答案為：
<pre>
"i: 0"
"i: 1"
"i: 2"
"i: 3"
"i: 4"
5
5
5
5
5
</pre>
以下為執行說明：
1. 首先執行 for 迴圈，第一圈設 i = 0，檢查條件 i 是否 < 5，是， `console.log('i: ' + 0)` 進入堆疊 ，印出 `"i: 0"` 並跳出堆疊，接著 `setTimeout(() => { console.log(0) }, 0 * 1000)` 進入堆疊，透過 Web API，在瀏覽器設定計時器為 0，直到倒數結束，並把 setTimeout 的 callback function `() => { console.log(0)` 放到工作佇列裡，setTimeout 跳出堆疊。
2. 第一圈結束，設 i = 1，檢查條件 i 是否 < 5，是，`console.log('i: ' + 1)` 進入堆疊 ，印出 `"i: 1"` 並跳出堆疊，接著 `setTimeout(() => { console.log(1) }, 1 * 1000)` 進入堆疊，透過 Web API，在瀏覽器設定計時器為 1 毫秒，直到倒數結束，並把 setTimeout 的 callback function `() => { console.log(1)` 放到工作佇列裡，setTimeout 跳出堆疊。
3. 第二圈結束，設 i = 2，檢查條件 i 是否 < 5，是，`console.log('i: ' + 2)` 進入堆疊 ，印出 `"i: 2"` 並跳出堆疊，接著 `setTimeout(() => { console.log(2) }, 2 * 1000)` 進入堆疊，透過 Web API，在瀏覽器設定計時器為 2 毫秒，直到倒數結束，並把 setTimeout 的 callback function `() => { console.log(2)` 放到工作佇列裡，setTimeout 跳出堆疊。
4. 第三圈結束，設 i = 3，檢查條件 i 是否 < 5，是，`console.log('i: ' + 3)` 進入堆疊 ，印出 `"i: 3"` 並跳出堆疊，接著 `setTimeout(() => { console.log(3) }, 3 * 1000)` 進入堆疊，透過 Web API，在瀏覽器設定計時器為 3 毫秒，直到倒數結束，並把 setTimeout 的 callback function `() => { console.log(3)` 放到工作佇列裡，setTimeout 跳出堆疊。
5. 第四圈結束，設 i = 4，檢查條件 i 是否 < 5，是，`console.log('i: ' + 4)` 進入堆疊 ，印出 `"i: 4"` 並跳出堆疊，接著 `setTimeout(() => { console.log(4) }, 4 * 1000)` 進入堆疊，透過 Web API，在瀏覽器設定計時器為 2 毫秒，直到倒數結束，並把 setTimeout 的 callback function `() => { console.log(4)` 放到工作佇列裡，setTimeout 跳出堆疊。
6. 第五圈結束，設 i = 5，檢查條件 i 是否 < 5，否，結束迴圈。
7. 執行工作佇列第一項，`() => { console.log(i) }`，此時自己的作用域中找不到 i，往上層尋找， i = 5，因此印出 5。  
8. 執行工作佇列第二項，`() => { console.log(i) }`，此時自己的作用域中找不到 i，往上層尋找， i = 5，因此印出 5。  
9. 執行工作佇列第三項，`() => { console.log(i) }`，此時自己的作用域中找不到 i，往上層尋找， i = 5，因此印出 5。  
10. 執行工作佇列第四項，`() => { console.log(i) }`，此時自己的作用域中找不到 i，往上層尋找， i = 5，因此印出 5。  
11. 執行工作佇列第五項，`() => { console.log(i) }`，此時自己的作用域中找不到 i，往上層尋找， i = 5，因此印出 5。  
