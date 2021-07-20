import $ from 'jquery'

export function getComments(apiUrl, siteKey, before, cb) {
  $.ajax({
    url: `${apiUrl}/api_comments.php?site_key=${siteKey}&before=${before}`
  }).done((data) => {
    cb(data)
  })
}
export function addComments(apiUrl, siteKey, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_comments.php`,
    data
  }).done((data) => {
    cb(data)
  })
}
