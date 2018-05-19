'use strict';

chrome.runtime.onMessage.addListener(request => {
  comment(request.url);
  approve();
});

const comment = url => {
  const comment = `![LGTM](${url})`;
  document.getElementById('pull_request_review_body').value = comment;
};

const approve = () => {
  document.getElementsByName('pull_request_review[event]')[1].checked = true;
};
