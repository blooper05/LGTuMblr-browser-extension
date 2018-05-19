'use strict';

chrome.runtime.onMessage.addListener(request => {
  comment(request.url);
});

const comment = url => {
  const comment = `![LGTM](${url})`;
  document.getElementById('pull_request_review_body').value = comment;
};
