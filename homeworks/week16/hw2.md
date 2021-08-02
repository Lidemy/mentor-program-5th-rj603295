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
1. 首先執行 for 迴圈，第一圈設 i = 0，檢查條件 i 是否 < 5，是，印出 `"i: 0"`，執行  setTimeout，並把 setTimeout 的 callback function 放到工作佇列裡。
2. 第一圈結束，設 i = 1，檢查條件 i 是否 < 5，是，印出 `"i: 1"`，執行  setTimeout，並把 setTimeout 的 callback function 放到工作佇列裡。
3. 第二圈結束，設 i = 2，檢查條件 i 是否 < 5，是，印出 `"i: 2"`，執行  setTimeout，並把 setTimeout 的 callback function 放到工作佇列裡。
4. 第三圈結束，設 i = 3，檢查條件 i 是否 < 5，是，印出 `"i: 3"`，執行  setTimeout，並把 setTimeout 的 callback function 放到工作佇列裡。
5. 第四圈結束，設 i = 4，檢查條件 i 是否 < 5，是，印出 `"i: 4"`，執行  setTimeout，並把 setTimeout 的 callback function 放到工作佇列裡。
6. 第五圈結束，設 i = 5，檢查條件 i 是否 < 5，否，結束迴圈。
7. 執行工作佇列第一項，`console.log(i)`，此時 i = 5，因此印出 5。
8. 執行工作佇列第二項，`console.log(i)`，此時 i = 5，因此印出 5。  
<br>
依此類推...  
<br>
9. 執行工作佇列第五項，`console.log(i)`，此時 i = 5，因此印出 5。
