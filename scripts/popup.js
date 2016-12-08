$(function () {
  load();

  $('#reload').on('click', function (data) {
    loading();
    load();
  });
});

function load() {
  const URL = 'http://tumblrapi-blooper.rhcloud.com/photos';

  $.getJSON(URL, null, function (data, status) {
    $.each(data, function () {
      var img = $('<img>').addClass('image').attr('src', this);
      $('main').append(img).hide().fadeIn('fast');
    });

    $('#loading').fadeOut();

    loaded();
  });
}

function loaded() {
  const PREFIX = 'http://hisaichilgtm.herokuapp.com/';

  $('.image').on('click', function (data) {
    var url = PREFIX + this.src.replace(/https/g, 'http');

    copy(url);

    chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
      chrome.tabs.sendMessage(tab[0].id, { url: url }, function (response) {});
    });
  });
}

function loading() {
  $('.image').fadeOut(null, function () {
    this.remove();
  });
  $('#loading').fadeIn('fast');
}

function copy(url) {
  var textArea = $('<textarea>').addClass('copy').val(url);
  $('footer').append(textArea);

  textArea.select();
  document.execCommand('copy');

  $('.copy').remove();
}
