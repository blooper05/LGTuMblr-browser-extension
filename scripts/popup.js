'use strict';

document.addEventListener('DOMContentLoaded', () => load());

const reload = document.getElementById('reload');
reload.addEventListener('click', () => load());

const load = () => {
  loading();
  const url = 'https://lgtumblr-api.herokuapp.com/images';
  fetch(url).then(res => res.json())
            .then(urls => insert(urls))
            .then(() => loaded())
};

const loaded = () => {
  const prefix = 'http://hisaichilgtm.herokuapp.com/';
  const images = document.getElementsByClassName('image');

  Array.from(images).forEach(image => {
    image.addEventListener('click', event => {
      const url = prefix + event.srcElement.src.replace(/https/g, 'http');
      copy(url);
      paste(url);
    });
  });
};

const loading = () => {
  const images  = document.getElementsByClassName('image');
  const loading = document.getElementById('loading');
  Array.from(images).forEach(image => image.remove());
  loading.style.display = '';
};

const insert = urls => {
  const loading = document.getElementById('loading');
  const imgs    = urls.map(url => `<img class="image" src="${url}">`);
  loading.insertAdjacentHTML('beforebegin', imgs.join('\n'));
  loading.style.display = 'none';
};

const copy = url => {
  const copy = `<textarea id="copy">${url}</textarea>`;
  reload.insertAdjacentHTML('afterend', copy);

  const dom = document.getElementById('copy');
  dom.select();
  document.execCommand('copy');
  dom.remove();
};

const paste = url => {
  chrome.tabs.query({active: true, currentWindow: true}, tab => {
    chrome.tabs.sendMessage(tab[0].id, {url}, () => {});
  });
};
