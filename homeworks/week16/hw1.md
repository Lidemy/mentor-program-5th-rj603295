### 答案會是 1, 3, 5, 2, 4，以下是執行順序：

1. 首先 `console.log(1)` 進入堆疊印出 1 並執行結束跳出堆疊。
2. 接著 `setTimeout(() => { console.log(2) }, 0)` 進入堆疊，透過 Web API，在瀏覽器設定計時器為 0，直到倒數結束，並把 setTimeout 裡面的 callback function `() => { console.log(2)}` 放到工作佇列（task queue）裡，然後 setTimeout 跳出堆疊。
3. 接著 `console.log(3)` 進入堆疊印出 3 並執行結束跳出堆疊。
4. 接著 `setTimeout(() => { console.log(4) }, 0)` 進入堆疊，透過 Web API，在瀏覽器設定計時器為 0，直到倒數結束，並把 setTimeout 裡面的 callback function `() => { console.log(4)}` 放到工作佇列（task queue）裡，然後 setTimeout 跳出堆疊。
5. 接著 `console.log(5)` 進入堆疊印出 5 並執行結束跳出堆疊。
6. 執行工作佇列裡的第一個項目， `console.log(2)`，印出 2。
7. 執行工作佇列裡的第二個項目， `console.log(4)`，印出 4。
