import $ from 'jquery'
import { getComments, addComments } from './api'
import { cssTemplate, getLoadMoreButton, getForm } from './templates'
import { appendCommentToDOM, appendStyle } from './utils'
/* eslint-disable-next-line */
export function init(options) {
  let siteKey = ''
  siteKey = options.siteKey
  let apiUrl = ''
  let containerElement = null
  let commentDOM = null
  let before = 0
  const loadMoreClassName = `${siteKey}-btn-load`
  const commentsClassName = `${siteKey}-comments`
  const commentsSelector = `.${commentsClassName}`
  const formClassName = `${siteKey}-add-comment-form`
  const formSelector = `.${formClassName}`
  apiUrl = options.apiUrl
  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentsClassName))
  containerElement.append(getLoadMoreButton(loadMoreClassName))
  appendStyle(cssTemplate)
  commentDOM = $(commentsSelector)

  function getNewComments() {
    getComments(apiUrl, siteKey, before, (data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      const comments = data.discussions
      if (comments.length < 5) {
        $(`.${loadMoreClassName}`).text('沒有更多了')
        $(`.${loadMoreClassName}`).attr('disabled', true)
        before = comments[comments.length - 1].id
      }
      before = comments[comments.length - 1].id
      for (const comment of comments) {
        appendCommentToDOM(commentDOM, comment)
      }
    })
  }
  function loadComments() {
    $(`.${loadMoreClassName}`).click(() => {
      $.ajax({
        url: `${apiUrl}/api_comments.php?site_key=${siteKey}&before=${before}`
      }).done((data) => {
        if (!data.ok) {
          alert(data.message)
          return
        }
        const comments = data.discussions
        before = comments[comments.length - 1].id
        if (before === 1) {
          $(`.${loadMoreClassName}`).text('沒有更多了')
          $(`.${loadMoreClassName}`).attr('disabled', true)
        }
        for (const comment of comments) {
          appendCommentToDOM(commentDOM, comment)
        }
      })
    })
  }
  function addComment() {
    $(formSelector).submit((e) => {
      e.preventDefault()
      const nickNameDom = $(`${formSelector} input[name=nickname]`)
      const contentDom = $(`${formSelector} textarea[name=content]`)
      const newCommentData = {
        site_key: siteKey,
        nickname: nickNameDom.val(),
        content: contentDom.val()
      }
      addComments(apiUrl, siteKey, newCommentData, (data) => {
        if (!data.ok) {
          alert(data.message)
          return
        }
        nickNameDom.val('')
        contentDom.val('')
        appendCommentToDOM(commentDOM, newCommentData, true)
      })
    })
  }
  getNewComments()
  loadComments()
  addComment()
}
