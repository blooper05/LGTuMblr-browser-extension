chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var comment = '![LGTM](' + request.url + ')';
  $('#new_comment_field').val(comment);
});
