## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
*****
1. `<code>`<br>
   `<code>` 標籤的語意表示其中的文本是程式碼。常與`<pre>`一起使用。
2. `<caption>`<br> 
   `<caption>`標籤定義表格的標題，放在`<table>`標籤之後。
3. `<video>`<br>
   `<video>` 標籤 (tag) 用來播放影片或影音串流。

## 請問什麼是盒模型（box modal）
*****
  所有HTML元素可以看作盒子，用來設計和布局時使用。
  盒模型就像是一個盒子，裝著所有的HTML元素，並且可以針對這個盒子去做調整，包括：margin，border，padding，content等等調整內容。
  下面的圖片說明了盒子模型(Box Model)：

![Box Model](https://www.runoob.com/images/box-model.gif)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
*****
### 1. inline -> 行內元素
 - 元素可在同一行內呈現，圖片或文字均不換行，也不會影響其版面配置
 - 不可設定長寬，元素的寬高由它的內容撐開
 - 另外，常聽到行內元素不能設定上下margin/padding，但並非不能設定，是排版不會隨著設定改變，字仍在行內，其他行並不會被推開。

### 2. block -> 區塊元素
 - 元素寬度預設會撐到最大，使其占滿整個容器
 - 可以設定長寬/margin/padding，但仍會占滿一整行

### 3. inline-block -> 行內區塊
 - 以inline的方式呈現，但同時擁有block的屬性
 - 可設定元素的寬高/margin/padding
 - 可水平排列
## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
*****
### 1. static
 - 預設值，該元素出現在文檔的常規位置，不會重新定位。
### 2. relative
 - 相對於原來位置移動，元素設置此屬性之後仍然處在正常的位置，不影響其他元素的布局。
### 3. absolute
 - 絕對定位的元素的位置相對於**最近的**已定位父元素，如果元素沒有已定位的父元素，那麽它的位置相對於<html>。
### 3. fixed
 - 元素的位置相對於 window 是固定位置。即使窗口是滾動的它也不會移動。


