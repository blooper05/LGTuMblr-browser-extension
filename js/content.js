chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var comment = '![LGTM](' + 'http://hisaichilgtm.herokuapp.com/' + request.url.replace(/https/g, 'http') + ')';
  $('#new_comment_field').val(comment);
});
