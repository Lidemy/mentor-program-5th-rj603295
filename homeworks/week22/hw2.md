## 請列出 React 內建的所有 hook，並大概講解功能是什麼
*****
### 基礎的 Hook
1. useState  
回傳一個 state 的值和更新 state 的 function。
在首次 render 時，回傳的 state 的值會跟第一個參數（initialState）一樣。
2. useEffect  
useEffect 可以幫助我們在 DOM 更新完成後執行某些 side effect 操作。useEffect 有兩個參數，第一個參數是一個函式，第二個參數則是一個陣列。
    ```javascript
    useEffect(() => {
        console.log('This is like componentDidUpdate, I will be triger whenever count state change')
    },[count])
    ```
    以上述程式碼來白話舉例，只要 count 的值發生改變，就會觸發一次 effect function。  
3. useContext  
接收一個 context object（React.createContext 的回傳值）並回傳該 context 目前的值，通常用來解決 prop drilling 的問題。
### 額外的 Hook
1. useReducer  
    useState 的替代方案，當你需要更複雜的 state 邏輯，useReducer 會比 useState 更適用。 
    以下為程式碼使用範例：
    ```javascript
    const initialState = {count: 0};
    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
      }
    }
    function Counter() {
          // 返回值：最新的state和dispatch函式
          const [state, dispatch] = useReducer(reducer, initialState);
          return (
            // useReducer根據dispatch的action，返回最終的state，並觸發re-render
            Count: {state.count}
            // dispatch 用來接收一個 action參數「reducer中的action」，用來觸發reducer函式，更新最新的狀態
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          );
      }
    ``` 
2. useMemo  
為了在 re-render 避免一些不必要的複雜計算而使用的，通常是優化效能階段或是一些特殊需求才會用到
    ```javascript
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```
    如上述程式碼，useMemo 只會在 a 或 b 改變時才重新計算 memoized 的值。這個最佳化可以避免在每次 render 都進行複雜的計算。
3. useCallback  
與 useMemo 類似，為了避免在 re-render 避免重新執行一些複雜的計算，以優化效能。  
     useMemo 與 useCallback 差別：useCallback返回一个函式，當它把返回的函式做為子元件使用時，可以避免每次父元件更新時都重新渲染子元件。
4. useRef  
useRef 可以存放可變的值，跟使用 useState 的區別在於，它不會導致 component re-render。
5. useImperativeHandle  
    useImperativeHandle 可以讓使用 ref 時能向父元件傳送自定義的 instance 值。useImperativeHandle 應與 forwardRef 一同使用：
    ```javascript
    function FancyInput(props, ref) {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));
      return <input ref={inputRef} ... />;
    }
    FancyInput = forwardRef(FancyInput);
    ```
    在這個範例中，render <FancyInput ref={inputRef} /> 的父元件能呼叫 inputRef.current.focus()。

6. useLayoutEffect  
    使用方式與 useEffect 一樣，只是差別在觸發的時間點是在所有 DOM 改變之後才會同步呼叫。  
7. useDebugValue  
    於一般 Project 中較少使用，於 custom hook 中較常使用。  
    useDebugValue 用在 React 開發者工具中顯示自定義Hook 的標籤。 useDebugValue 接受一個格式化函數作為可選的第二個參數。 該函數只有在 Hook 被檢查時才會被呼叫。 它接受 debug 值作為參數，並且會返回一個格式化的顯示值。  
    參考用法：https://github.com/puxiao/react-hook-tutorial/blob/master/15%20useDebugValue%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95.md
## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點
*****
### React 的生命週期可以分為三個階段：
- Mounting：一個 component 的 instance 被建立且加入 DOM 中的階段
- Updating：當 prop 或 state 有變化時，重新渲染的階段
- Unmounting：當一個 component 被從 DOM 中移除時的階段  
詳如下圖： 
![生命週期示意圖](./life_cycle.png)

Mounting階段：
-  componentDidMount   
    在第一次 render 後呼叫。此時元件已經生成了對應的 DOM 結構。  

Updating階段：
-  shouldComponentUpdate  
    回傳一個布林值。在元件接收到新的 props 或 state 時被呼叫，可以在確認不需要更新元件時使用。
-  componentDidUpdate  
    在元件完成更新後立即呼叫。如果 shouldComponentUpdate 回傳值為 false，則此函式不會被呼叫，另外，在初次 render 時也不會被呼叫。

Unmouting階段：
-  componentWillUnmount  
    當一個 component 被從 DOM 中移除時，就會呼叫 componentWillUnmount  

## 請問 class component 與 function component 的差別是什麼？
*****
- 程式碼簡潔度  
    以下面程式碼舉例，function component 相較 class component 程式碼較簡短。
```javascript
// Class-based
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Functional
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
    
- 渲染機制  
    class：即使狀態沒變化，只要調用了 setstate function 就會觸發 component 的重新渲染。  
    functional：只有狀態值真正改變時，才會觸發 render 函式的調用。因此某些狀況下 functional component 自動幫你擋掉了一些不必要的重新渲染，提升整體效能。
- this 的使用  
    Function Component 因為是個 function，所以沒有 this，或者說 this 指向的物件並不是 component 本身。這提供了幾個好處，一是語法上的簡潔性，不用再寫像是 this.state.xxx 的冗長語法，也不用煩惱在傳入事件處理器時要根據使用場景來 bind(this)。
- 簡單比較   

    | 項目 | Functional Component | Class Component |
    | ------ | --------------------- | -----------------|
    | 編譯  | 較快 (少了繼承 class 轉成 ES5)     |        |
    | 程式碼  | 較簡潔      |       |
    | this的使用  | 無, 較少      | 需要使用 bind 來或其他方法來正確取得 this 的值       |
    | React生命週期  | React 生命週期方法不能在功能元件中使用。     | React 生命週期方法可以在類元件中使用（例如，componentDidMount）。  |

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？
*****
Controlled 和 Uncontrolled 指的是「資料受不受到 React 所控制」，之所以在表單元素上會區分「受 React 控制的資料」和「不受 React 控制的資料」，主要是因為在瀏覽器中，像是 `<input />` 這類的表單元素本身就可以保有自己的資料狀態，這也就是爲什麼當我們在 `<input />` 中輸入文字後，可以直接透過 JavaScript 選到該 input 元素後，再取出該元素的值，因為使用者輸入的內容（資料）可以直接保存在 `<input />` 元素內。  

而針對表單元素，React 建議我們使用 Controlled Components，所以會先透過 useState 來建立保存資料狀態的地方，接著在表單元素上透過 onChange 事件來取得該表單元素當前的值，並且馬上更新到 React 組件的資料狀態內，如下面例子：  
```javascript
function App() {
  const [value, setValue] = useState("")
  return(
    <input value={value} onChange={e => setValue(e.target.value)}/>
  )
}
```


