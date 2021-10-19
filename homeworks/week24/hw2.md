## Redux middleware 是什麼？
*****
middleware 像是一個中介站點，在使用者觸發事件，呼叫 action，並在 action 進入 reducer 之前，幫忙執行額外的 function，或是進行額外的處理。

## CSR 跟 SSR 差在哪邊？為什麼我們需要 SSR？
*****
### SSR (Server-Side Rendering)
Server 端收到 request 後，轉譯成 HTML 返回到 Client 端，最後渲染出網頁畫面。

### CSR(Client-Side Rendering)
前端利用 Javascript 「動態」和 Server 端取得資料，再動態渲染出畫面。

### SEO 方面
SSR 是由 server 端先轉譯成 HTML 的語法，並直接呈現在網頁，而 CSR 是動態取得資料再由前端根據資料去決定畫面，所以從原始碼來看的話，CSR 會是一片空白，對 SEO 來說，SSR 會比 CSR 來的更好。
### 效能方面
由於 CSR 是透過前端去動態取得資料和渲染畫面，但當資料過於龐大時，使用者第一次載入網頁的時間會變慢，效能及體驗變差，而 SSR 相較來說渲染速度就會比較快。  
### 使用者體驗方面
由於 SSR 每次發出請求都必須換頁，使用者體驗來說，CSR 相較 SSR 來的較佳。

## React 提供了哪些原生的方法讓你實作 SSR？
*****
大致的 React SSR 實作步驟：  
1.  將要顯示在畫面上的 Component，用 ReactDOM/server 提供的`renderToString` 轉成字串。
2. 用 `StaticRouter` 將路徑設成 req.path。

目前程式碼會變成如下所示，function 接收一個 request，讓 Router 判斷需要 Render 哪個 Component，並把整段 html 程式碼傳進去。
  
```javascript
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../Routes';

export default (req) => {
  // 把 component Render 成 string
  const content = renderToString(
    <StaticRouter location={req.path}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>,
  );
  // 初始的 HTML 畫面
  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `;
};
```
運用以上方式，可以讓第一次渲染時，HTML 部分不會空白。
## 承上，除了原生的方法，有哪些現成的框架或是工具提供了 SSR 的解決方案？至少寫出兩種
*****
1. Next.js - 基於 React，可提供 SSR 解決方案的框架。
2. prerender.io - 把訪問網站後拿到的資料儲存，在搜尋引擎來的時候再把資料吐給他。
3. Gatsby  


