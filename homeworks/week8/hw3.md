## 什麼是 Ajax？
****
Ajax 全名為「Asynchronous JavaScript and XML」，主要重點在第一個「Asynchronous」，非同步的觀念，由於 JavaScript 是單執行緒的程式語言，程式碼由上跑到下，假設今天中間有一段程式碼需要比較久的時間執行，後面的程式碼就無法繼續動，整個程式就會卡住，而非同步解決了這個問題，讓使用非同步方式的程式碼可以先擺在旁邊執行，繼續先 run 後面的程式碼，等到非同步的程式碼執行完畢後再回傳結果。
<br/>  
所以今天如果我們想要透過 JS 去跟 Server 交換資料，就可以使用 Ajax 的方式，並且不用擔心因為資料量太大，整個程式卡住無法動彈。
## 用 Ajax 與我們用表單送出資料的差別在哪？
*****
用表單發 request 送出資料到 Server，Server 回傳的 response 會直接被瀏覽器渲染，並且頁面會重新整理，但用 Ajax 可以不用重新重整頁面，就可以讓頁面換成新的資料。

## JSONP 是什麼？
*****
由於瀏覽器有安全性的考量，因此衍生出一個叫做「同源政策」的東西，只要是 Domain 不一樣就是不同源，或者是一個用 http 一個用 https 也是不同源，端口號不一樣也是不同源，因此假設今天我們想要跟某網站交換資料，大多數情況都是「不同源」的，那就會需要解決「跨網域請求」的問題。
  
而 JSONP 就是一種解決跨網域請求問題的方式：

有些東西是不受跨網域的限制的，例如說`<script>`這個 Tag，JSONP 就是利用`<script>`的這個特性來達成跨來源請求的。<br>
例如下面的程式碼:

    <script src="https://another-origin.com/api/games"></script>
    <script>
      console.log(response)
    </script>

假設今天 `https://another-origin.com/api/games` 回傳的是

    var response = {
      data: 'test'
    }

那我就可以拿到 Server 端給我的資料了，這個就是 JSONP 的原理。
## 要如何存取跨網域的 API？
*****
CORS，全名為 Cross-Origin Resource Sharing，跨來源資源共享。  
「如果你想在不同 origin 之間傳輸資料的話，你應該怎麼做」，這規範就叫做 CORS。     
這套規範說，如果想開啟跨來源 HTTP 請求的話，Server 必須在 Response 的 Header 裡面加上`Access-Control-Allow-Origin`。   
當瀏覽器收到 Response 之後，會先檢查`Access-Control-Allow-Origin`裡面的內容，如果裡面有包含現在這個發起 Request 的 Origin 的話，就會允許通過，讓程式順利接收到 Response。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
*****
因為跨網域的問題是瀏覽器為了安全性而產生的保護機制，第四週時我們是用我們的電腦透過 node.js 直接發 request 出去，沒有透過瀏覽器，這週則是透過瀏覽器發 request，因此第四週時沒有碰到這個問題，這週卻碰到了。
