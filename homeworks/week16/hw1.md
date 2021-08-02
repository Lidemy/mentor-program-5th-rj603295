### 答案會是 1, 3, 5, 2, 4，以下是執行順序：

1. 首先 `console.log(1)` 進入堆疊印出 1 並執行結束跳出堆疊。
2. 接著執行 `setTimeout(() => {
  console.log(2)
}, 0)`，並把 setTimeout 裡面的 callback function 放到工作佇列（task queue）裡，然後 setTimeout 跳出堆疊。
3. 接著 `console.log(3)` 進入堆疊印出 3 並執行結束跳出堆疊。
4. 接著執行 `setTimeout(() => {
  console.log(4)
}, 0)`，並把 setTimeout 裡面的 callback function 放到工作佇列（task queue）裡，然後 setTimeout 跳出堆疊。
5. 接著 `console.log(5)` 進入堆疊印出 5 並執行結束跳出堆疊。
6. 執行工作佇列裡的第一個項目， `console.log(2)`，印出 2。
7. 執行工作佇列裡的第二個項目， `console.log(4)`，印出 4。
