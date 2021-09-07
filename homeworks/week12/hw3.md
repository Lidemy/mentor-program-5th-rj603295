## 請簡單解釋什麼是 Single Page Application
*****
一頁式的應用程式，不用換頁就能夠達到建立、讀取、修改、刪除等功能，在使用者體驗上更加良好。

## SPA 的優缺點為何
*****
優點：SPA 利用 AJAX 來更新資料，使用者不用再透過換頁來看到新的資料，增強了使用者體驗，前後端分離的設計模式，後端負責產生計算資料，前端負責頁面的呈現。透過 Client 及 Server 端的區分，讓前後端有更加的職責區分。  
缺點：  
  1. SPA 在網頁第一次載入時會需要比較長的時間。
  2. 在 SEO 上比較不利，因為 SPA 許多內容都是動態產生的，會導致搜尋引擎無法取得太多網站的資訊。

## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？
*****
之前直接透過 PHP 輸出內容時，都需要經過換頁才能渲染新的資料到頁面上，這週以透過 API 的方式進行資料串接，則不用透過換頁就能達到資料更新的目的。