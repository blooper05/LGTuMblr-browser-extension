'use strict';

chrome.runtime.onMessage.addListener(request => {
  const comment = `![LGTM](${request.url})`;
  document.getElementById('new_comment_field').value = comment;
});
