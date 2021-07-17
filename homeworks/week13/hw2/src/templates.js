export const cssTemplate =
`.container {
  margin-top: 12px;
}
label {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
}
.comment {
  margin-bottom: 12px;
}
.card {
  margin-top: 12px;
  margin-bottom: 12px;
}
.btn-secondary {
  margin-bottom: 8px;
}`

export function getForm(className, commentsClassName) {
  return `
  <div>
  <form class='${className}'>
    <div class="mb-3">
      <label>暱稱</label>
      <input name="nickname" type="text" class="form-control">
    </div> 
    <div class="comment">
      <label>留言內容</label>
      <textarea name="content" class="form-control" style="height: 100px"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>      
  </form>
  <div class="${commentsClassName}"></div>
  </div>
  `
}
export function getLoadMoreButton(className) {
  return `<button type="button" class="btn btn-outline-secondary ${className}">載入更多</button>`
}
