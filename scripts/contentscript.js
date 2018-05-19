'use strict';

chrome.runtime.onMessage.addListener(request => {
  const comment = `![LGTM](${request.url})`;
  document.getElementById('pull_request_review_body').value = comment;
});
