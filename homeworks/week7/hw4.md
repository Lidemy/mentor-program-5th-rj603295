## 什麼是 DOM？
*****
就是把一份 HTML 文件內的各個標籤，包括文字、圖片等等都定義成物件，而這些物件最終會形成一個樹狀結構，下面有一張示意圖可以參考。

![示意圖](https://www.w3schools.com/js/pic_htmltree.gif)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
*****
DOM 的事件在傳播時，會有一連串傳遞的順序，以下圖為例，在點擊 target 後，DOM 事件會先從根節點一路開始向下傳遞到 target，這時就處於捕獲階段，接著事件會一路往上從子節點傳回根節點，這時就叫做冒泡階段，

![示意圖](https://static.coderbridge.com/img/techbridge/images/huli/event/eventflow.png)

## 什麼是 event delegation，為什麼我們需要它？
*****
事件代理即是把原本需要綁定在子元素的響應事件委托給父元素，讓父元素擔當事件監聽的職務。事件代理的原理是 DOM 元素的事件冒泡。
當子元素有許多需要被綁定監聽時，綁定每個子元素並不是一個有效率的方法，因此可以委託父元素，讓綁定的動作只需要做一次就好。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
*****
event.preventDefault 是阻止預設行為，以超連結 a 標籤為例，超連結的預設行為為「導向連結」，如果使用了 event.preventDefault 便可以阻止「導向連結」的預設行為；<br>
event.stopPropagation 是阻止事件事件冒泡，以下圖為例：
<br>
![示意圖](https://ithelp.ithome.com.tw/upload/images/20180828/20106935TQrsfxRteG.jpg)

在點擊 button 後，因為 DOM 事件傳遞的機制（捕獲與冒泡），所以會一起觸發外面兩層 div 的事件，如果我們不希望冒泡的事件發生，就可以使用 event.stopPropagation 阻止事件冒泡，也就不會觸發到外面兩層 div 的事件了。